import {
	ReactElement,
	ReactNode,
	cloneElement,
	createContext,
	useContext,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { useClickOutSideElement } from "../hooks/useClickOutsideElement";

interface menuValues {
	openId: string;
	close: Function;
	open: Function;
	position: any;
	setPosition: Function;
	isOpen: boolean;
	setIsOpen: Function;
}

const MenuContext = createContext<menuValues | undefined>(undefined);

function Menus({ children }: { children: ReactNode }) {
	const [openId, setOpenId] = useState("");
	const [position, setPosition] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const close = () => {
		setOpenId("");
	};
	const open = (id: any) => {
		setOpenId(id);
		setIsOpen(true);
	};

	return (
		<MenuContext.Provider
			value={{
				openId,
				close,
				open,
				position,
				setPosition,
				isOpen,
				setIsOpen,
			}}
		>
			<div className=" flex items-center justify-end">{children}</div>
		</MenuContext.Provider>
	);
}

const useMenuContext = () => {
	const context = useContext(MenuContext);
	if (context === undefined) throw new Error("out of provider");
	return context;
};

function Toggle({ id, children }: { id: any; children: ReactNode }) {
	const { openId, close, open, setPosition, setIsOpen, isOpen } =
		useMenuContext();

	function handleClick(e: any) {
		if (isOpen && openId=="") {
			setIsOpen(false);
			return;
		}
		const rect = e.target.closest("button").getBoundingClientRect();
		openId === "" || openId !== id ? open(id) : close();

		setPosition({
			x: window.innerWidth - rect.width - rect.x,
			y: rect.y + rect.height + 8,
		});
	}

	return cloneElement(children as ReactElement, {
		onClick: (e: Event) => {
			handleClick(e);
		},
	});
}

function List({ id, children }: { id: any; children: ReactNode }) {
	const { openId, position, close } = useMenuContext();
	const ref = useClickOutSideElement(() => close(), HTMLUListElement);
	if (openId !== id) return null;

	return createPortal(
		<ul
			className={`fixed z-50 space-y-2 rounded-md bg-white py-2 shadow-md right-[20px] mobile:right-[20%]`}
			style={{
				top: `${position.y+10}px`,
			}}
			ref={ref}
		>
			{children}
		</ul>,
		document.body,
	);
}

function Button({
	children,
	onClick,
}: {
	children: ReactNode;
	onClick: Function;
}) {
	const { close } = useMenuContext();

	function handleClick() {
		onClick?.();
		close();
	}

	return (
		<li>
			<button
				className="flex w-full items-center gap-6 border-none bg-none px-5 py-1 text-left text-lg text-gray-600 transition-all duration-200 hover:bg-gray-100"
				onClick={handleClick}
			>
				{children}
			</button>
		</li>
	);
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
