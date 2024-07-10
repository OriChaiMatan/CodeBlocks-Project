import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CodeBlockIndex } from './pages/CodeBlockIndex';
import { CodeBlockDetails } from './pages/CodeBlockDetails';

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CodeBlockIndex />} />
          <Route path="/codeblock" element={<CodeBlockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
