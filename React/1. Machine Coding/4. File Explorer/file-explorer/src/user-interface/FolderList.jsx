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

// import React, {useEffect} from 'react';
// import "./FolderList.css";
// function FolderList({folderList}) {
// 	const [expanded, setExpanded] = React.useState({});
//	
// 	useEffect(() =>{
// 		const initialState = {};
// 		function buildExpandableStates(item){
// 			item.forEach((i) => {
// 				if(i.type === "folder"){
// 					if(i.children && i.children.length > 0){
// 						buildExpandableStates(i.children);
// 					}
// 					initialState[i.id] = false;
// 				}
// 			});
// 		}
// 		buildExpandableStates(folderList);
// 		setExpanded(initialState);
// 	},[folderList]);
//	
// 	function handleCollapse(id) {
// 		setExpanded(prev => ({
// 			...prev,
// 				[id]: !prev[id]
// 		}));
// 	}
//	
// 	function recursiveFolderList(folder){
// 			return 	folder.map((folder) => {
// 				return (
// 					<div key={folder.id} className={folder.type === "folder" ? "parent" : "children"}>
// 						{folder.type === "folder" ? (
//
// 							<>
// 								<button type="button" onClick={() => handleCollapse(folder.id)}>
// 										<span className={"parent-folder-name"}>{folder.name}
// 											{expanded[folder.id] ? "-": "+"}
// 										</span>
// 								</button>
// 							<div className={ expanded[folder.id] && folder.type === "folder" ? "expanded" : "d-none" }>
// 								{folder.children && recursiveFolderList(folder.children)}
// 							</div>	
// 							</>
//							
// 						) : (
// 							<span className="folder-name">{folder.name}</span>
// 						)}
// 					</div>
// 				);
// 			})
// 	}
//	
// 	return (
// 		<div className="FolderList">
// 			{recursiveFolderList(folderList)}
// 		</div>
// 	);
// }
//
// export default FolderList;