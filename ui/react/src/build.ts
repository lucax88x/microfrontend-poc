import { generateReactWrappers} from "custom-element-react-wrappers";
import manifest from "../../base/custom-elements.json";

type Options = Parameters<typeof generateReactWrappers>[1]

const options = {
  attributeMapping: {
    for: "_for",
  },

  modulePath: () => `@poc/ui/base`,
  // modulePath: (className, tagName) => `../../dist/${tagName}/${className}.js`,

  outdir: `src/components`,
  defaultExport: true,
  descriptionSrc: "description",
} satisfies Options;

generateReactWrappers(manifest, options);
