import { generateReactWrappers } from "custom-element-react-wrappers";
import manifest from "../../base/custom-elements.json";

const options = {
  attributeMapping: {
    for: "_for",
  },

  modulePath: () => `@poc/ui/base`,
  // modulePath: (className, tagName) => `../../dist/${tagName}/${className}.js`,

  outdir: `src/components`,

  descriptionSrc: "description",
};

generateReactWrappers(manifest, options);
