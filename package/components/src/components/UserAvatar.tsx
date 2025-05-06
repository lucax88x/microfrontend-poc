import "~/package/components/tailwind.css";

import { initModule } from "~/package/components/init-module";

await initModule();

export type UserAvatarProps = { user: string };

const getInitials = (user: string) => {
	return user
		.split(" ")
		.filter((n) => n.length > 0)
		.map((s) => s[0])
		.filter((s) => s)
		.map((s) => s?.toUpperCase())
		.join("");
};

export const UserAvatar = ({ user }: UserAvatarProps) => {
	const initials = getInitials(user);

	return (
		<div className="cmp-flex cmp-items-center cmp-gap-4 cmp-justify-center">
			<div className="cmp-flex cmp-size-10 cmp-items-center cmp-justify-center cmp-rounded-full cmp-ring-2 cmp-ring-white cmp-bg-black cmp-text-white cmp-text-xl cmp-shrink-0">
				{initials}
			</div>
		</div>
	);
};

export default UserAvatar;
