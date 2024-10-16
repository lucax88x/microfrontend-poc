import "design-system/web-components";
import "./App.css";

import { lazy, Suspense, useEffect } from "react";
import { of, tap } from "rxjs";
import Counter from "./components/Counter";

const Angular1 =
  // @ts-ignore
  async () => import("angular-1/bootstrap");

const React1App =
  lazy(
  // @ts-ignore
  async () => import("react-1/app")
)

const React1Docs =
  lazy(
  // @ts-ignore
  async () => import("react-1/docs")
)

const React1Charts =
  lazy(
  // @ts-ignore
  async () => import("react-1/charts")
)

Angular1().then((a) => {
  console.log(a);
  a.bootstrap();
});

export default () => {
  useEffect(() => {
    of("emit")
      .pipe(tap(() => console.log("I'm RxJs from host")))
      .subscribe();
  }, []);

  return (
    <>
      <div className="host">
        <div className="card">
          <div className="icon">
            <svg
              enableBackground="new 0 0 512 512"
              height="512px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M316.01,199.02L256.134,14.817L196.239,199.02H1.134l158.102,113.324L98.53,496.487l157.604-114.232  l157.585,114.232l-60.687-184.143L511.134,199.02H316.01z M335.084,318.257l42.407,128.63L267.22,366.963l-11.086-8.033  l-11.086,8.033l-110.291,79.923l42.408-128.63l4.353-13.18l-11.289-8.08L59.903,217.909h136.336h13.724l4.242-13.051l41.929-128.957  l41.91,128.957l4.242,13.051h13.724h136.336l-110.327,79.088l-11.27,8.08L335.084,318.257z"
                fill="#37404D"
              />
            </svg>
          </div>
          <div className="title">shell</div>
          <Counter />

        </div>
      </div>

      <app-remote-root />

      <Suspense fallback="loading...">
        <React1App />
      </Suspense>

      <Suspense fallback="loading...">
        <React1Docs />
      </Suspense>

      <Suspense fallback="loading...">
        <React1Charts />
      </Suspense>
    </>
  );
};
