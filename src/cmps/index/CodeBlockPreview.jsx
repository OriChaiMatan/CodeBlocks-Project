import { Link } from "react-router-dom"

export function CodeBlockPreview({ codeBlock }) {
    return (
        <div className="codeblock-preview">
            <Link to={`/codeblock/${codeBlock._id}`}>
                <p>{codeBlock.title}</p>
            </Link>
        </div>
    )
}