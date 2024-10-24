import React, { forwardRef, useImperativeHandle } from "react";
import "@poc/ui/base";

export const Icon = forwardRef((props, forwardedRef) => {
  const { stroke, icon, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "my-icon",
    {
      ...filteredProps,
      stroke: props.stroke,
      icon: props.icon,
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
