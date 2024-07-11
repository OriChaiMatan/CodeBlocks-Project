import { Link } from "react-router-dom"

export function CodeBlockPreview({ codeBlock }) {
    return (
        <div>
            <Link to={`/codeblock/${codeBlock._id}`}>
                <h1>{codeBlock.title}</h1>
            </Link>
        </div>
    )
}