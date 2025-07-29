import { Typography, Box, Grid, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import inventoryImg from '../images/inventory_app.png';
import hackathonImg from '../images/hackathon.png';
import backendImg from '../images/backend.png';
import frontendImg from '../images/frontend.png';
import deploymentImg from '../images/deployment.png';

export default function Projects() {
  const projects = [
    {
      title: 'Inventory App',
      description: 'A full-stack app to manage and track inventory items efficiently.',
      image: inventoryImg,
      url: 'https://inventory-app-irving-99.onrender.com/',
      details: {
        purpose: 'Create a tool to track and manage inventory in real time.',
        features: 'CRUD operations, search/filter, user authentication, responsive UI.',
        skills: 'React, Node.js, Express, MongoDB, MUI, communication, problem-solving.',
        application: 'Built full-stack features from database to UI. Focused on authentication and RESTful APIs.',
        takeaways: 'Learned to structure scalable projects and handle secure user data.',
        contribution: 'Solo project: handled end-to-end development and deployment.',
        link: 'https://inventory-app-irving-99.onrender.com/',
      },
    },
    // You can add similar `details` fields for the other projects
    {
      title: 'Bootcamp Hackathon',
      description: 'A rapid prototyping project built in 48 hours with a team.',
      image: hackathonImg,
      url: 'https://your-hackathon-project.com',
      details: {
        purpose: 'Prototype an app under time constraints with teammates.',
        features: 'Real time site and weather data, clickable popups, filtering options.',
        skills: 'React, research, adaptability, GitLab flow.',
        application: 'Focused on UI build-out and connecting shared state.',
        takeaways: 'Learned rapid iteration and communication.',
        contribution: 'Front-end lead in a 3-person team.',
        link: 'https://your-hackathon-project.com',
      },
    },
    {
      title: 'Backend Module Project',
      description: 'RESTful API project with Node.js and Spring boot.',
      image: backendImg,
      url: 'https://create-event-app.netlify.app/',
      details: {
        purpose: 'Build a back-end API to support front-end requests.',
        features: 'CRUD routes, MySQL schema, testing endpoints.',
        skills: 'Node.js, Spring boot, MySQL, Postman, documentation.',
        application: 'Designed and implemented RESTful routes.',
        takeaways: 'Gained confidence in API design and server logic.',
        contribution: 'Solo backend development with deployable routes.',
        link: 'https://create-event-app.netlify.app/',
      },
    },
    {
      title: 'Frontend Module Project',
      description: 'Responsive React frontend styled with MUI.',
      image: frontendImg,
      url: 'https://github.com/AdrianBurke1/Front-End-Project',
      details: {
        purpose: 'Design a frontend UI for an existing backend API.',
        features: 'Routing, dynamic views, responsive layouts.',
        skills: 'React, React Router, MUI, GitHub collaboration.',
        application: 'Created React components and responsive design.',
        takeaways: 'Learned component reusability and better state handling.',
        contribution: 'Solo frontend project with full layout build.',
        link: 'https://github.com/AdrianBurke1/Front-End-Project',
      },
    },
    {
      title: 'Deployment Module Project',
      description: 'End-to-end deployment using Docker and Render.',
      image: deploymentImg,
      url: 'https://class-management-frontend.onrender.com/',
      details: {
        purpose: 'Deploy a full-stack app using CI/CD and Docker.',
        features: 'Render deployment, Dockerfile setup, HTTPS handling.',
        skills: 'Docker, Render, deployment strategy, CI/CD basics.',
        application: 'Packaged and deployed apps with environment configs.',
        takeaways: 'Learned real-world deployment flow and debugging tools.',
        contribution: 'Deployed solo project using Docker and GitHub Actions.',
        link: 'https://class-management-frontend.onrender.com/',
      },
    },
  ];

  return (
    <div>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 400 }}>
        My Projects
      </Typography>
      <Typography variant="h6" sx={{ color: '#555', mb: 4 }}>
        A selection of recent work
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} md={10} lg={8} key={project.title}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Paper
                sx={{
                  position: 'relative',
                  height: 350,
                  width: '700px',
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 4,
                  transition: 'transform 0.3s',
                  mx: 'auto',
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
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
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
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </Box>
              </Paper>
            </a>

            {/* Accordion for project details */}
            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">More About This Project</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {Object.entries(project.details).map(([label, content]) => (
                  <Box key={label} sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                      {label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#444' }}>
                      {content}
                    </Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
