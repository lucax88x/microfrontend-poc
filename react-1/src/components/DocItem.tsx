import { PropsWithChildren } from "react";
import { Doc } from "../models/doc";

export const DocItem = ({ doc }: PropsWithChildren<{ doc: Doc }>) => {
  return (
    <div className="r1-flex r1-items-center r1-justify-between r1-p-4 r1-border-b">
      <div className="r1-flex-1">
        <h3 className="r1-text-lg r1-font-semibold">{doc.label}</h3>
        <p className="r1-text-sm r1-text-gray-500">{doc.id}</p>
      </div>
      <div className="r1-flex r1-items-center r1-space-x-2">
        <a
          href={doc.url}
          download
          className="r1-p-2 r1-text-blue-600 r1-hover:text-blue-800"
          title="Download"
        >
          <my-icon icon="download" />
        </a>
      </div>
    </div>
  );
};
