import React, { useState } from "react";
import "./FolderList.css";

function FolderList({ folderList }) {
	return (
		<div className="FolderList">
			<FolderTree nodes={folderList} />
		</div>
	);
}

function FolderTree({ nodes }) {
	return nodes.map((node) => (
		<TreeNode key={node.id} node={node} />
	));
}

function TreeNode({ node }) {
	const [isExpanded, setIsExpanded] = useState(false);

	if (node.type === "file") {
		return <div className="file">{node.name}</div>;
	}

	return (
		<div className="folder">
			<button
				type="button"
				className="folder-btn"
				onClick={() => setIsExpanded((prev) => !prev)}
				aria-expanded={isExpanded}
			>
				{node.name} {isExpanded ? "-" : "+"}
			</button>

			{isExpanded && Array.isArray(node.children) && (
				<div className="children">
					<FolderTree nodes={node.children} />
				</div>
			)}
		</div>
	);
}

export default FolderList;
