import {
	ReactElement,
	ReactNode,
	cloneElement,
	createContext,
	useContext,
	useState,
} from "react";
import { IoCloseSharp } from "react-icons/io5";
import { createPortal } from "react-dom";
import { useClickOutSideElement } from "../hooks/useClickOutsideElement";

interface ModalProps {
	children: ReactNode;
}

interface OpenProps {
	children: ReactNode;
	openName: string;
}

interface WindowProps {
	children: ReactNode;
	currentWindowname: string;
}

interface ModalContextType {
	handleOpenWindow: (name: string) => void;
	handleCloseWindow: () => void;
	openWindow: string;
}

const ModalContext = createContext<ModalContextType | null>(null);

const Modal = ({ children }: ModalProps) => {
	const [openWindow, setOpenWindow] = useState<string>("");

	const handleCloseWindow = () => {
		setOpenWindow("");
	};

	const handleOpenWindow = (name: string) => {
		setOpenWindow(name);
	};

	return (
		<ModalContext.Provider
			value={{ handleCloseWindow, handleOpenWindow, openWindow }}
		>
			{children}{" "}
		</ModalContext.Provider>
	);
};

const Open = ({ children, openName }: OpenProps) => {
	const values = useContext(ModalContext);

	return cloneElement(children as ReactElement, {
		onClick: () => values?.handleOpenWindow(openName),
	});
};

const Window = ({ children, currentWindowname }: WindowProps) => {
	const values = useContext(ModalContext);
	const ref = useClickOutSideElement(() => values?.handleCloseWindow());

	if (values?.openWindow !== currentWindowname) {
		return null;
	}
	return createPortal(
		<div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-[rgba(255,255,255,0.5)] backdrop-blur-sm	">
			<div
				className=" relative rounded-xl bg-white p-[100px] shadow-2xl shadow-[rgba(27,90,168,0.2)] mobile:p-[50px]"
				ref={ref}
			>
				<button
					onClick={values.handleCloseWindow}
					className="absolute right-6 top-6 text-3xl text-gray-500"
				>
					{" "}
					<IoCloseSharp />{" "}
				</button>
				<div>
					{cloneElement(children as ReactElement, {
						onClose: values.handleCloseWindow,
					})}
				</div>
			</div>
		</div>,
		document.body,
	);
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
