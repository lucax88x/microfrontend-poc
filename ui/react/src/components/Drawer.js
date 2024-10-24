import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@poc/ui/base";
import { useEventListener } from "./react-utils.js";

export const Drawer = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, title, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "drawer-closed", props.onDrawerClosed);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "my-drawer",
    {
      ref,
      ...filteredProps,
      title: props.title,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
