import './index.css'

import { ListDocs } from './components/ListDocs';
import { Doc } from './models/doc';

export default () => {
  const docs: Doc[] = [
    { id: "1", label: "Document 1", url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf" },
    { id: "2", label: "Document 2", url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf" },
    { id: "3", label: "Document 3", url: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf" },
  ];

	return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Document List</h2>
        <ListDocs docs={docs} />
      </div>
	);
};
