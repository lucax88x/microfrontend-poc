import { type PropsWithChildren, useCallback } from "preact";
import type { Doc } from "../models/doc";

export const DocItem = ({ doc }: PropsWithChildren<{ doc: Doc }>) => {
	const emit = useCallback(() => {
		const event = new CustomEvent("ask-chat", {
			bubbles: true,
			composed: true,
			detail: doc,
		});

		document.body.dispatchEvent(event);
	}, []);

	return (
		<div className="r1-flex r1-items-center r1-justify-between r1-border-b r1-p-4">
			<div className="r1-flex-1">
				<h3 className="r1-text-lg r1-font-semibold">{doc.label}</h3>
				<p className="r1-text-sm r1-text-gray-500">{doc.id}</p>
			</div>
			<div className="r1-flex r1-items-center r1-space-x-2">
				<a href={doc.url} download className="r1-p-2" title="Download">
					<my-icon icon="download" />
				</a>
				<div style={{ cursor: "pointer" }} onClick={emit}>
					<my-icon slot="prefix" icon="chat"></my-icon>
				</div>
			</div>
		</div>
	);
};
