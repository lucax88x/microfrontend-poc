import "../index.css";

import { useEffect, useState } from "react";
import { DocItem } from "../components/DocItem";
import { Doc } from "../models/doc";

export const ListDocs = () => {
	const [docs, setDocs] = useState<Doc[]>([]);

	useEffect(() => {
		const handleDocSend = (e: CustomEvent) => {
			setDocs((docs) => {
				return [...docs, e.detail];
			});
		};
		document.addEventListener("doc-send", handleDocSend);

		return () => {
			document.removeEventListener("doc-send", handleDocSend);
		};
	}, []);

	return (
		<>
			{docs.length === 0 ? (
				<p>no documents yet</p>
			) : (
				docs.map((doc) => <DocItem key={doc.id} doc={doc} />)
			)}
		</>
	);
};

export default ListDocs;
