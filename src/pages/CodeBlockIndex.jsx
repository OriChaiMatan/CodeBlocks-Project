import { codeblockService } from "../services/codeblock.service"
import { useState, useEffect } from "react"
import { CodeBlockList } from "../cmps/index/CodeBlockList"

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
            <h1>Choose code block</h1>
            <CodeBlockList codeBlocks={codeBlocks} />
        </div>
    )
}