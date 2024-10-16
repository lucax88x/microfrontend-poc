import { PropsWithChildren } from "react";
import { DocItem } from "../components/DocItem";
import { Doc } from "../models/doc";

export const ListDocs = ({ docs }: PropsWithChildren<{ docs: Doc[] }>) => {
  return (
    <>
      <my-card>
        <div className="border rounded-lg overflow-hidden">
          {docs.map((doc) => (
            <DocItem key={doc.id} doc={doc} />
          ))}
        </div>
      </my-card>
    </>
  );
};
