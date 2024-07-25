import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import { codeblockService } from "../services/codeblock.service"
import { socketService } from "../services/socket.service"
import { SOCKET_EVENT_CODE_UPDATE } from "../services/socket.service"

import { useCodeblockSocket } from "../hooks/useCodeBlockSocket"


import { CodeEditor } from "../cmps/details/CodeEditor"
import { SolutionBtn } from "../cmps/details/SolutionBtn"
import { RedirectModal } from "../cmps/details/RedirectModal"
import { SolutionModal } from "../cmps/details/SolutionModal"
import { Smiley } from "../cmps/details/Smiley"

export function CodeBlockDetails() {
    const [codeblock, setCodeblock] = useState(null)
    const [showSmiley, setShowSmiley] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    const { userRole, studentCount, showRedirectModal, emitCodeChange, setShowRedirectModal } = useCodeblockSocket(params.codeblockId)

    useEffect(() => {
        loadCodeblock()

        // Subscribe to code update events
        const handleCodeUpdate = (code) => setCodeblock(prev => ({ ...prev, code }))
        socketService.on(SOCKET_EVENT_CODE_UPDATE, handleCodeUpdate)

        // Cleanup subscription on component unmount
        return () => {
            socketService.off(SOCKET_EVENT_CODE_UPDATE, handleCodeUpdate)
        }
    }, [params.codeblockId])

    useEffect(() => {
        // Event listener to remove smiley on document click
        document.addEventListener('click', removeSmiley)

        return () => {
            document.removeEventListener('click', removeSmiley)
        }
    }, [])

    useEffect(() => {
        if (codeblock && codeblock.code === codeblock.solution) {
            setShowSmiley(true)
        }
    }, [codeblock])

    async function loadCodeblock() {
        try {
            const codeblock = await codeblockService.getById(params.codeblockId)
            setCodeblock(codeblock)
        } catch (err) {
            navigate('/')
            console.log('Error in loadCodeblock', err)
        }
    }

    function handleCodeChange(newCode) {
        const newCodeblock = { ...codeblock, code: newCode }
        setCodeblock(newCodeblock)
        emitCodeChange(newCode)
    }

    function handleCloseRedirectModal() {
        setShowRedirectModal(false)
        navigate('/')
    }

    function removeSmiley() {
        setShowSmiley(false)
    }


    if (!codeblock) return <div>Loading..</div>
    return (
        <div className="details">
            <h1 className="details-title">{codeblock.title}</h1>
            <div className="codeblock-details">
                <p aria-live="polite">Students in room: {studentCount}</p>
                <p aria-live="polite">Your role: {userRole}</p>
            </div>
            <CodeEditor code={codeblock.code}
                onCodeChange={handleCodeChange}
                role={userRole} />

            <SolutionBtn onClick={() => setShowModal(true)} />

            {showSmiley && <Smiley />}

            {showModal && (
                <SolutionModal
                    solution={codeblock.solution}
                    onClose={() => setShowModal(false)}
                />
            )}

            {showRedirectModal && (
                <RedirectModal onClose={handleCloseRedirectModal} />
            )}
        </div>
    )
}