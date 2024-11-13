import { Suspense, lazy } from "preact/compat";
import { useCallback, useEffect, useState } from "preact/hooks";
import { queryClient } from "~/query-client";

const UiButton = lazy(async () => import("@poc/ui/react/button"));
const UiIcon = lazy(async () => import("@poc/ui/react/icon"));
const UiCard = lazy(async () => import("@poc/ui/react/card"));
const React1ListDocs = lazy(
	async () => import("@poc/react-1/components/AsyncListDocs"),
);
const React1Chart = lazy(async () => import("@poc/react-1/components/Line"));
const React1DrawerChat = lazy(
	async () => import("@poc/react-1/components/DrawerChat"),
);

// @ts-expect-error demo
const Angular1 = async () => import("angular-1/bootstrap");

Angular1().then((a) => {
	console.log(a);
	a.bootstrap();
});

export default function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [isOpenChat, setIsOpenChat] = useState(false);
	const [question, setQuestion] = useState<JSX.Element | null>(null);

	useEffect(() => {
		const handleAskChat = (e: CustomEvent) => {
			setIsOpenChat(true);
			setQuestion(<p>question {e.detail.url}</p>);
		};

		// @ts-expect-error demo
		document.addEventListener("ask-chat", handleAskChat);

		return () => {
			// @ts-expect-error demo
			document.removeEventListener("ask-chat", handleAskChat);
		};
	}, []);

	const emit = useCallback(() => {
		setIsLoading(true);

		setTimeout(() => {
			const event = new CustomEvent("doc-send", {
				bubbles: true,
				composed: true,
				detail: {
					id: Math.random().toString(),
					label: "chart",
					url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
				},
			});

			document.body.dispatchEvent(event);

			setIsLoading(false);
		}, 500);
	}, []);

	return (
		<>
			<Suspense fallback={<p>loading</p>}>
				<UiCard
					title="documents"
					className="flex-1"
					headerColor="#facc15"
					borderColor="#facc15"
				>
					<React1ListDocs queryClient={queryClient} />
				</UiCard>
			</Suspense>
			<Suspense fallback={<p>loading</p>}>
				<React1DrawerChat
					isOpen={isOpenChat}
					question={question!}
					onClose={() => setIsOpenChat(false)}
				/>
			</Suspense>
			<Suspense fallback={<p>loading</p>}>
				<UiCard
					title="charts"
					className="flex-1"
					headerColor="#ca8a04"
					borderColor="#ca8a04"
				>
					<div className="flex flex-col gap-2">
						<React1Chart />

						<div className="flex gap-2">
							<UiButton onClick={emit} loading={isLoading ? true : undefined}>
								<UiIcon slot="prefix" icon="upload" />
								<slot slot="label">import</slot>
							</UiButton>

							<UiButton onClick={() => setIsOpenChat(true)}>
								<UiIcon slot="prefix" icon="chat" />
								<slot slot="label">ask me</slot>
							</UiButton>
						</div>
					</div>
				</UiCard>
			</Suspense>
			<app-remote-root />
		</>
	);
}
