import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import BottomAppBar from './components/Bottombar';

export default function App() {
  return (
    <>
      <Container
        maxWidth="lg" // ⬅️ Wider than "md"
        sx={{
          mt: 5,
          px: { xs: 3, sm: 5, md: 7, lg: 10, xl: 15 } // ⬅️ Slightly more padding
        }}
      >
        <Navbar />
        <BottomAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Container>
    </>
  );
}
