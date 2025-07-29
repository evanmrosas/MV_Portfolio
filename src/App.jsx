import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import BottomAppBar from './components/Bottombar';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          mt: 5,
          px: { xs: 4, sm: 6, md: 8 },
          maxWidth: '1000px', // ⬅️ Custom width
          mx: 'auto' // ⬅️ Centers it horizontally
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
      <Footer />
    </>
  );
}
