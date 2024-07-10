import { codeblockService } from "../services/codeblock.service"
import { useState, useEffect } from "react"
import { CodeBlockList } from "../cmps/CodeBlockList"

export function CodeBlockIndex() {
    const [codeBlocks, setCodeBlocks] = useState(null)

    useEffect(() => {
        loadCodeBlocks()
    }, [])

    async function loadCodeBlocks() {
        try {
            const codeblocks = await codeblockService.query()
            setCodeBlocks(codeblocks)
        } catch (err) {
            console.log('Error in loadCodeBlocks', err)
        }
    }

    if (!codeBlocks) return <div>Loading..</div>
    return (
        <div>
            <CodeBlockList codeBlocks={codeBlocks} />
            {/* <h1>Choose code block</h1>
            <Link to={`/codeblock`}>
                <button>here</button>
            </Link> */}
        </div>
    )
}