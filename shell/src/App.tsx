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

export default () => {
  const [isLoading, setIsLoading] = useState(false);

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
      <Suspense fallback="loading...">
        <React1Topbar />
      </Suspense>
      <div className="p-4 flex gap-2 flex-col md:flex-row">
        <Suspense fallback="loading...">
          <my-card title="documents" class="flex-1">
            <React1ListDocs />
          </my-card>
        </Suspense>
        <Suspense fallback="loading...">
          <my-card title="diagnostics" class="flex-1">
            <div className="flex gap-2 flex-col">
              <React1Chart />
              <my-button onClick={emit}>
                {isLoading ? <my-spinner /> : "import"}
              </my-button>
            </div>
          </my-card>
        </Suspense>
      </div>
    </>
  );
};
