import './styles/main.css';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ContactsPage } from './pages/ContactsPage';
import { ProjectPage } from './pages/ProjectPage';
import { Skills } from './pages/Skills';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
