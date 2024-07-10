import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CodeBlockIndex } from './pages/CodeBlockIndex'
import { CodeBlockDetails } from './pages/CodeBlockDetails'
import './assets/css/main.css'

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CodeBlockIndex />} />
          <Route path="/codeblock/:codeblockId" element={<CodeBlockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
