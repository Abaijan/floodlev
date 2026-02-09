import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import {Home} from './pages/index.js';
import {About} from './pages/index.js';
import {Contacts} from './pages/index.js';
import {Monitoring} from './pages/index.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="monitoring" element={<Monitoring />} />
        </Route>
      </Routes>
  );
}

export default App;
