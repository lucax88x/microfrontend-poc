import UserAvatar from "#components/UserAvatar";
import "./tailwind.css";
import { loadRemote } from "@module-federation/runtime";

loadRemote("@poc/ui-base");

export default () => {
	return (
		<div className="cmp-flex cmp-flex-col cmp-gap-10">
			<UserAvatar user="Marco Rossi" />
		</div>
	);
};
