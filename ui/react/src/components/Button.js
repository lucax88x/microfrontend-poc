import React, { forwardRef, useImperativeHandle } from "react";
import "@poc/ui/base";

export const Button = forwardRef((props, forwardedRef) => {
  const { loading, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "my-button",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      loading: props.loading ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
