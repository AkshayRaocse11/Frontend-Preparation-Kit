import React from "react";

export default function PostList({ name, gender, profileImage }) {
	return (
		<article className="post-list" aria-label={`Profile of ${name}`}>
			<div className="post-list__avatar">
				<img
					className="post-list__image"
					height="64"
					width="64"
					src={profileImage}
					alt={`Profile of ${name}`}
				/>
			</div>

			<div className="post-list__content">
				<h3 className="post-list__name">{name}</h3>
				<p className="post-list__meta">
          <span className="post-list__gender" aria-hidden="true">
            {gender}
          </span>
				</p>
			</div>
		</article>
	);
}
