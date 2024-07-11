import React from 'react'
import Editor from '@monaco-editor/react'

export function CodeEditor({ code }) {
    return (
        <Editor
            className='code-editor'
            defaultLanguage="javascript"
            value={code}
            theme="vs-dark"
            minimap={{ enabled: false }}
        />
    )
}