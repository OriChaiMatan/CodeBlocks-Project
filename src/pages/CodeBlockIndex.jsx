import { Link } from "react-router-dom";

export function CodeBlockIndex() {
    return (
        <div>
            <h1>CodeBlock index</h1>
            <Link to={`/codeblock`}>
                <button>here</button>
            </Link>
        </div>
    )
}