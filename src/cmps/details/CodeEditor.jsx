import React from 'react'
import Editor from '@monaco-editor/react'

export function CodeEditor({ code, onCodeChange, role }) {
    return (
        <Editor
            className='code-editor'
            defaultLanguage="javascript"
            value={code}
            theme="vs-dark"
            minimap={{ enabled: false }}
            onChange={onCodeChange}
            options={{ readOnly: role === 'Mentor' }}
        />
    )
}
