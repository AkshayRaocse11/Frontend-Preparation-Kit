import React from 'react';
import FolderList from "./user-interface/FolderList";

function FileExplorer() {
	const fileExplorerData = [
		{
			id: 1,
			name: "src",
			type: "folder",
			children: [
				{
					id: 2,
					name: "components",
					type: "folder",
					children: [
						{
							id: 3,
							name: "Button.jsx",
							type: "file"
						},
						{
							id: 4,
							name: "Modal.jsx",
							type: "file"
						},
						{
							id: 12,
							name: "Form",
							type: "folder",
							children: [
								{
									id: 13,
									name: "Input",
									type: "folder",
									children: [
										{
											id: 14,
											name: "TextInput.jsx",
											type: "file"
										},
										{
											id: 15,
											name: "PasswordInput.jsx",
											type: "file"
										}
									]
								},
								{
									id: 16,
									name: "Validation",
									type: "folder",
									children: [
										{
											id: 17,
											name: "rules.js",
											type: "file"
										}
									]
								}
							]
						}
					]
				},
				{
					id: 5,
					name: "pages",
					type: "folder",
					children: [
						{
							id: 6,
							name: "index.jsx",
							type: "file"
						},
						{
							id: 7,
							name: "about.jsx",
							type: "file"
						},
						{
							id: 18,
							name: "dashboard",
							type: "folder",
							children: [
								{
									id: 19,
									name: "analytics",
									type: "folder",
									children: [
										{
											id: 20,
											name: "charts",
											type: "folder",
											children: [
												{
													id: 21,
													name: "BarChart.jsx",
													type: "file"
												},
												{
													id: 22,
													name: "LineChart.jsx",
													type: "file"
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					id: 8,
					name: "App.jsx",
					type: "file"
				}
			]
		}
	];

	return (
		<div>
			<FolderList folderList={fileExplorerData}/>
		</div>
	);
}

export default FileExplorer;