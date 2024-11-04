import { Button } from "./components/Button";
import { Icon } from "./components/Icon";

export default () => {
  return (
    <div>
      <Button>
        <Icon slot="prefix" icon="upload"></Icon>
        <span slot="label">upload</span>
      </Button>
    </div>
  );
};
