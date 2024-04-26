import waveFooter from "../assets/waveFooter.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "./Logo";

const Footer = () => {
	return (
		<div className="relative bg-linearBlue-1">
			<img
				src={waveFooter}
				alt="waveFooter"
				className="absolute top-[-200px] -z-50 w-full mobile:top-[-80px] tablet:top-[-120px]"
				data-testid="waveVector"
			/>

			<div
				className="z-50 flex items-center justify-between px-40 pb-10 text-white
       mobile:px-4 tablet:px-16"
			>
				<div className="flex flex-col items-center gap-4">
					<Logo type="secondery" />
					<p className="flex items-center justify-center gap-2 text-xl font-light mobile:text-xs tablet:text-lg">
						<span className="text-2xl mobile:text-sm tablet:text-xl">
							<FaCopyright />
						</span>
						<span>copy rights reserved</span>
					</p>
				</div>

				<div className="space-y-3">
					<p className="text-center text-2xl font-bold mobile:text-sm tablet:text-xl">
						Explore
					</p>
					<ul className="flex flex-col items-center gap-2 text-xl font-light mobile:text-xs tablet:text-lg">
						<li>
							<p>Blog</p>
						</li>
						<li>
							<p>Dashboard</p>
						</li>
						<li>
							<p>About us</p>
						</li>
					</ul>
				</div>

				<div className="space-y-3">
					<p className="text-2xl font-bold mobile:text-sm tablet:text-xl">
						Contact us
					</p>
					<ul className="flex flex-col items-start gap-2 text-xl font-light mobile:text-xs tablet:text-lg">
						<li className="flex items-center justify-center gap-1">
							<CiLinkedin />
							<p>LinkedIn</p>
						</li>
						<li className="flex items-center justify-center gap-1">
							<FaGithub />
							<p>Github</p>
						</li>
						<li className="flex items-center justify-center gap-1">
							<MdOutlineMailOutline />
							<p>Email</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
