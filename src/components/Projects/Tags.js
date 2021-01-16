import React from "react";
import { tags } from "../../content/tagContent";

export default function Tags(props) {
    const { clickTag, currTag, background, text } = props;
    return (
        <div className="project-tech-container">
            {tags.map(tag => (
                <button
                    key={tag}
                    className="project-tech button-tech"
                    style={{
                        background: `${currTag === tag ? background : ``}`,
                        color: `${currTag === tag ? text : ``}`,
                    }}
                    onClick={() => clickTag(tag)}
                >
                    <span className="hashtag">#</span> {tag}
                </button>
            ))}
        </div>
    );
}
