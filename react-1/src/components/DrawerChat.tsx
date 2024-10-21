import { PropsWithChildren, useEffect } from "react";
import { Chat } from "./Chat";

export const DrawerChat = ({
  isOpen,
  onClose,
}: PropsWithChildren<{ isOpen: boolean; onClose: () => void }>) => {
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
  }, []);

  return (
    <my-drawer title="Ask me" open={isOpen ? true : undefined}>
      <Chat />
    </my-drawer>
  );
};

export default DrawerChat;
