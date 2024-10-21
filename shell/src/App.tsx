import "design-system/web-components";
import "./index.css";

import { lazy, Suspense, useCallback, useState } from "react";

const React1ListDocs = lazy(
  // @ts-ignore
  async () => import("react-1/components/list-docs"),
);

const React1Chart = lazy(
  // @ts-ignore
  async () => import("react-1/components/line"),
);

const React1Topbar =
  // @ts-ignore
  lazy(async () => import("react-1/components/topbar"));

const React1DrawerChat =
  // @ts-ignore
  lazy(async () => import("react-1/components/drawer-chat"));

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);

  const emit = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      const event = new CustomEvent("doc-send", {
        bubbles: true,
        composed: true,
        detail: {
          id: Math.random().toString(),
          label: "diagnostics",
          url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
        },
      });

      document.body.dispatchEvent(event);

      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Suspense fallback={<my-spinner />}>
        <React1Topbar />
      </Suspense>
      <div className="p-4 flex justify-center">
        <div className="container flex gap-2 flex-col md:flex-row">
          <Suspense fallback={<my-spinner />}>
            <my-card
              title="documents"
              class="flex-1"
              // color="#fff"
              // backgroundColor="#facc15"
            >
              <React1ListDocs />
            </my-card>
          </Suspense>
          <Suspense fallback={<my-spinner />}>
            <React1DrawerChat
              isOpen={isOpenChat}
              onClose={() => setIsOpenChat(false)}
            />
          </Suspense>
          <Suspense fallback={<my-spinner />}>
            <my-card
              title="diagnostics"
              class="flex-1"
              // color="#fff"
              // backgroundColor="#ca8a04"
            >
              <div className="flex gap-2 flex-col">
                <React1Chart />

                <div className="flex gap-2">
                  <my-button
                    onClick={emit}
                    loading={isLoading ? true : undefined}
                  >
                    <my-icon slot="prefix" icon="upload"></my-icon>
                    <slot slot="label">import</slot>
                  </my-button>

                  <my-button onClick={() => setIsOpenChat(true)}>
                    <my-icon slot="prefix" icon="chat"></my-icon>
                    <slot slot="label">ask me</slot>
                  </my-button>
                </div>
              </div>
            </my-card>
          </Suspense>
        </div>
      </div>
    </>
  );
};
