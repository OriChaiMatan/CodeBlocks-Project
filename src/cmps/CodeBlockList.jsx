import { CodeBlockPreview } from "./CodeBlockPreview"

export function CodeBlockList({ codeBlocks }) {
    return (
        <ul className="code-block-list">
            {codeBlocks.map((codeBlock) => (
                <li key={codeBlock._id}>
                    <CodeBlockPreview codeBlock={codeBlock} />
                </li>
            ))}
        </ul>
    )
}
