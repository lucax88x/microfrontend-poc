import React, { forwardRef, useImperativeHandle } from "react";
import "@poc/ui/base";

export const Spinner = forwardRef((props, forwardedRef) => {
  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "my-spinner",
    {
      ...props,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children,
  );
});
