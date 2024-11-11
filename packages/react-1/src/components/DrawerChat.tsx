import type { PropsWithChildren } from "preact/compat";
import { useEffect } from "preact/hooks";
import { Chat } from "./Chat";

export const DrawerChat = ({
	isOpen,
	question,
	onClose,
}: PropsWithChildren<{
	isOpen: boolean;
	question: JSX.Element;
	onClose: () => void;
}>) => {
	useEffect(() => {
		const handleDrawerEvent = () => {
			onClose();
		};

		const drawerElement = document.querySelector("my-drawer");
		if (drawerElement) {
			drawerElement.addEventListener(
				"drawer-closed",
				handleDrawerEvent as EventListener,
			);
		}

		return () => {
			if (drawerElement) {
				drawerElement.removeEventListener(
					"drawer-closed",
					handleDrawerEvent as EventListener,
				);
			}
		};
	}, [onClose]);

	return (
		<my-drawer title="Ask me" open={isOpen ? true : undefined}>
			<Chat question={question} />
		</my-drawer>
	);
};

export default DrawerChat;
