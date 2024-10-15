import { PropsWithChildren, useCallback } from "react";
import { Doc } from "src/models/doc";

export const DocItem = ({ doc }: PropsWithChildren<{doc: Doc}>) => {
  const emit = useCallback(() => {
    const event = new CustomEvent('doc-send', {
      bubbles: true,
      composed: true,
      detail: doc
    });
        
    document.body.dispatchEvent(event);
  }, [])
  
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{doc.label}</h3>
        <p className="text-sm text-gray-500">{doc.id}</p>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href={doc.url}
          download
          className="p-2 text-blue-600 hover:text-blue-800"
          title="Download"
        >
          {/* <Download size={20} /> */}
          down
        </a>
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          title="More details"
          onClick={emit}
        >
          {/* <ArrowRight size={20} /> */}
          to the angular
        </button>
      </div>
    </div>
  );
};

