import { LazyComponent } from "@poc/federation/core/src/LazyComponent";
import type {
	UserAvatar,
	UserAvatarProps,
} from "@poc/package/components/components/UserAvatar";
import { UserAvatarSkeleton } from "~/federation/package/components/Skeletons";

export const LazyUserAvatar = (props: UserAvatarProps) => (
	<LazyComponent<typeof UserAvatar>
		module="UserAvatar"
		scope="@poc/package/components"
		loading={<UserAvatarSkeleton />}
		render={(UserAvatar) => <UserAvatar {...props} />}
	/>
);
