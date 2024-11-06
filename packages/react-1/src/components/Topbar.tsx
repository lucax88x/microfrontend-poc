import "../index.css";

import type { PropsWithChildren } from "react";

export interface TopbarProps {
	title: string;
}

export const Topbar = (props: PropsWithChildren<TopbarProps>) => {
	return (
		<nav className="r1-bg-gradient-to-r r1-from-yellow-400 r1-to-yellow-600 r1-p-4 r1-shadow-lg">
			<div className="r1-container r1-mx-auto r1-flex r1-items-center r1-justify-between">
				<div className="r1-flex r1-items-center r1-space-x-2">
					<svg className="r1-h-8 r1-w-8 r1-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
					<span className="r1-text-xl r1-font-bold r1-text-white">{props.title}</span>
				</div>

				<div className="r1-hidden r1-space-x-4 md:r1-flex">
					<NavButton icon={<my-icon icon="home" />} text="Documents" />
					<NavButton icon={<my-icon icon="search" />} text="Search" />
					<NavButton icon={<my-icon icon="bell" />} text="Notifications" />
				</div>

				{/* User Profile */}
				<div className="r1-flex r1-items-center r1-space-x-4">
					<span className="r1-text-white">John Doe</span>
					<div className="r1-flex r1-h-8 r1-w-8 r1-items-center r1-justify-center r1-rounded-full r1-text-white r1-ring-2 r1-ring-white">
						<my-icon icon="user" />
					</div>
					<button className="r1-md:hidden r1-text-white">
						<my-icon icon="menu" />
					</button>
				</div>
			</div>
		</nav>
	);
};

const NavButton = ({ icon, text }: PropsWithChildren<{ icon: JSX.Element; text: string }>) => (
	<button className="r1-hover:bg-white r1-hover:bg-opacity-20 r1-flex r1-items-center r1-space-x-1 r1-rounded-md r1-px-3 r1-py-2 r1-text-white r1-transition r1-duration-300">
		{icon}
		<span>{text}</span>
	</button>
);

export default Topbar;
