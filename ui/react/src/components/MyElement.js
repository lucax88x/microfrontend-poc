import React, { forwardRef, useImperativeHandle } from "react";
import "@poc/ui/base";

export const MyElement = forwardRef((props, forwardedRef) => {
  const { name, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "my-element",
    {
      ...filteredProps,
      name: props.name,
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
