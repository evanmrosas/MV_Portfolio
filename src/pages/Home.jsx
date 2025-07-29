import { Typography, Grid, Paper, Box } from '@mui/material';
import AutoplayCarousel from '../components/AutoplayCarousel';

import inventoryImg from '../images/inventory_app.png';
import hackathonImg from '../images/hackathon.png';
import backendImg from '../images/backend.png';

const featuredProjects = [
  {
    title: 'Inventory App',
    description: 'A full-stack inventory management tool built with the MERN stack.',
    image: inventoryImg,
    url: 'https://inventory-app-irving-99.onrender.com/',
  },
  {
    title: 'Bootcamp Hackathon',
    description: 'A 48-hour team challenge that rapidly produced a functional MVP.',
    image: hackathonImg,
    url: 'https://your-hackathon-project.com',
  },
  {
    title: 'Backend Module Project',
    description: 'RESTful API project with Node.js and Spring boot.',
    image: backendImg,
    url: 'https://create-event-app.netlify.app/',
  },
];

export default function Home() {
  return (
    <div>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 300 }}>
        Software Engineer turning ideas into intuitive, scalable applications.
      </Typography>
      <Typography variant="h3" sx={{ fontSize: 18, color: '#555', mb: 10 }}>
        With full-stack versatility and a passion for clean, user-focused code, I bring digital concepts to life.
      </Typography>

      <AutoplayCarousel />

      {/* 🔽 Mini Projects Section */}
      <Typography variant="h4" sx={{ mt: 10, mb: 4 }}>
        Featured Work
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* First Project: full width */}
        <Grid item xs={12} md={10} lg={8}>
          <a
            href={featuredProjects[0].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Paper
              sx={{
                position: 'relative',
                height: 350,
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 4,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.01)',
                },
              }}
            >
              <Box
                component="img"
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  p: 2,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))',
                  color: '#fff',
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {featuredProjects[0].title}
                </Typography>
                <Typography variant="body2">{featuredProjects[0].description}</Typography>
              </Box>
            </Paper>
          </a>
        </Grid>

        {/* Second row: 2 side-by-side */}
        {featuredProjects.slice(1).map((project) => (
          <Grid item xs={8} sm={4} md={3} key={project.title}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Paper
                sx={{
                  position: 'relative',
                  height: 250,
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 4,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.01)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '350px',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    p: 1.5,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))',
                    color: '#fff',
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </Box>
              </Paper>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
