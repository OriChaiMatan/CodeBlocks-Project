import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import { codeblockService } from "../services/codeblock.service"
import { CodeEditor } from "../cmps/details/CodeEditor"

export function CodeBlockDetails() {
    const [codeblock, setCodeblock] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadCodeblock()
    }, [params.codeblockId])

    async function loadCodeblock() {
        try {
            const codeblock = await codeblockService.getById(params.codeblockId)
            setCodeblock(codeblock)
        } catch (err) {
            navigate('/')
            console.log('Error in loadCodeblock', err)
        }
    }

    
    if (!codeblock) return <div>Loading..</div>
    return (
        <div className="details">
            <h1 className="details-title">{codeblock.title}</h1>
            <CodeEditor code={codeblock.code} />
        </div>
    )
}