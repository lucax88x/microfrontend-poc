import "../index.css";

import { useEffect, useState } from "react";
import { DocItem } from "../components/DocItem";
import { Doc } from "../models/doc";

export const ListDocs = () => {
  const [docs, setDocs] = useState<Doc[]>([
    {
      id: "1",
      label: "Document 1",
      url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
    },
    {
      id: "2",
      label: "Document 2",
      url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
    },
    {
      id: "3",
      label: "Document 3",
      url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
    },
  ]);

  useEffect(() => {
    document.addEventListener("doc-send", handleDocSend);

    return () => {
      document.removeEventListener("doc-send", handleDocSend);
    };
  }, []);

  const handleDocSend = (e) => {
    setDocs((docs) => {
      return [...docs, e.detail];
    });
  };

  return (
    <>
      {docs.map((doc) => (
        <DocItem key={doc.id} doc={doc} />
      ))}
    </>
  );
};

export default ListDocs;
