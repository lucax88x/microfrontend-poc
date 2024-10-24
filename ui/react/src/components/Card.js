import React, { forwardRef, useImperativeHandle } from "react";
import "@poc/ui/base";

export const Card = forwardRef((props, forwardedRef) => {
  const {
    title,
    headerColor,
    color,
    backgroundColor,
    borderColor,
    ...filteredProps
  } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "my-card",
    {
      ...filteredProps,
      title: props.title,
      headerColor: props.headerColor,
      color: props.color,
      backgroundColor: props.backgroundColor,
      borderColor: props.borderColor,
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
