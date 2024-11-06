import "@poc/ui/base";
import "./index.css";

import { state } from "@shared/shared";

import { lazy, Suspense, useCallback, useEffect, useState } from "react";

const UiButton = lazy(async () => import("@poc/ui/react/button"));
const UiIcon = lazy(async () => import("@poc/ui/react/icon"));
const UiSpinner = lazy(async () => import("@poc/ui/react/spinner"));
const UiCard = lazy(async () => import("@poc/ui/react/card"));
const React1ListDocs = lazy(async () => import("@poc/react-1/components/ListDocs"));
const React1Chart = lazy(async () => import("@poc/react-1/components/Line"));
const React1Topbar = lazy(async () => import("@poc/react-1/components/Topbar"));
const React1DrawerChat = lazy(async () => import("@poc/react-1/components/DrawerChat"));

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
	const [internalMessage, setInternalMessage] = useState("");

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

	useEffect(() => {
		const timeoutId = setInterval(() => {
			setInternalMessage(state.message);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<>
			<Suspense fallback={<UiSpinner />}>
				<React1Topbar title={internalMessage} />
			</Suspense>
			<div className="flex flex-col justify-center p-4">
				<div className="flex justify-center p-4">
					<div className="container flex flex-col gap-2 md:flex-row">
						<Suspense fallback={<UiSpinner />}>
							<UiCard title="documents" className="flex-1" headerColor="#facc15" borderColor="#facc15">
								<React1ListDocs />
							</UiCard>
						</Suspense>
						<Suspense fallback={<UiSpinner />}>
							<React1DrawerChat isOpen={isOpenChat} question={question!} onClose={() => setIsOpenChat(false)} />
						</Suspense>
						<Suspense fallback={<UiSpinner />}>
							<UiCard title="charts" className="flex-1" headerColor="#ca8a04" borderColor="#ca8a04">
								<div className="flex flex-col gap-2">
									<React1Chart />

									<div className="flex gap-2">
										<UiButton onClick={emit} loading={isLoading ? true : undefined}>
											<UiIcon slot="prefix" icon="upload"></UiIcon>
											<slot slot="label">import</slot>
										</UiButton>

										<UiButton onClick={() => setIsOpenChat(true)}>
											<UiIcon slot="prefix" icon="chat"></UiIcon>
											<slot slot="label">ask me</slot>
										</UiButton>
									</div>
								</div>
							</UiCard>
						</Suspense>
					</div>
				</div>
				<div className="flex justify-center p-4">
					<app-remote-root />
				</div>
			</div>
		</>
	);
}
