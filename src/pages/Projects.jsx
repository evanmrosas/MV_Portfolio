import {
  Typography,
  Box,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Backdrop,
  Fade
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

import inventoryImg from '../assets/inventory_app.png';
import hackathonImg from '../assets/hackathon.png';
import backendImg from '../assets/backend.png';
import frontendImg from '../assets/frontend.png';
import deploymentImg from '../assets/deployment.png';

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const projects = [
    {
      title: 'Inventory App',
      description: 'A full-stack app to manage and track inventory items efficiently.',
      image: inventoryImg,
      url: 'https://inventory-app-irving-99.onrender.com/',
      details: {
        purpose: 'Create a tool to track and manage inventory in real time.',
        features: 'CRUD operations, search/filter, responsive UI.',
        skills: 'React, Node.js, Express, MySQL, MUI, communication, problem-solving.',
        application: 'Built full-stack features from database to UI. Focused on RESTful APIs.',
        takeaways: 'Learned to structure scalable projects and handle secure user data.',
        contribution: 'Working within a team I helped with creating a responsive UI and creating a clean interface. Along with connecting the front-end to the back-end API.',
        reflection: 'Demonstrated full-stack development skills including backend API design and responsive UI. As a developer, Our team was able to bring this project lifecycle from database schema to frontend styling, showcasing both technical independence and holistic problem-solving.',
        link: 'https://github.com/irving-99/inventory-app',
      },
    },
    {
      title: 'Bootcamp Final',
      description: 'A rapid prototyping project built in 48 hours with a team.',
      image: hackathonImg,
      details: {
        purpose: 'Prototype an app under time constraints with teammates.',
        features: 'Real time site and weather data, clickable popups, filtering options.',
        skills: 'React, research, adaptability, GitLab flow.',
        application: 'Focused on UI build-out and connecting shared state.',
        takeaways: 'Learned rapid iteration and communication.',
        contribution: 'As a solo developer, I was responsible for the entire front-end build, including the UI design and connecting to the back-end API.',
        reflection: 'Highlighted collaboration in a time-sensitive environment. I led the frontend build, worked closely with teammates on state management, and ensured visual consistency. Emphasized rapid iteration and team adaptability under a tight deadline.',
        link: 'Private – Cannot disclose.',
      },
      isConfidential: true,
    },
    {
      title: 'Backend Module Project',
      description: 'RESTful API project with Node.js and Spring boot.',
      image: backendImg,
      url: 'https://create-event-app.netlify.app/',
      details: {
        purpose: 'Build a back-end API to support front-end requests.',
        features: 'CRUD routes, MySQL schema, testing endpoints, Oauth.',
        skills: 'Node.js, Spring boot, MySQL, Postman, documentation, authentication.',
        application: 'Designed and implemented RESTful routes.',
        takeaways: 'Gained confidence in API design and server logic.',
        contribution: 'As a part of a team I was responsible for setting up the model and routes for the back-end API, along with creating the database schema.',
        reflection: 'Showcased backend API design skills, including route structuring and database integration. I contributed to the team by setting up the model and routes, ensuring a solid foundation for the front-end to interact with.',
        link: 'https://github.com/Evan-Mahdi/Back-End-Project-Repo',
      },
    },
    {
      title: 'Frontend Module Project',
      description: 'Responsive React frontend styled with MUI.',
      image: frontendImg,
      url: 'https://github.com/AdrianBurke1/Front-End-Project',
      details: {
        purpose: 'Design a frontend UI for a web application.',
        features: 'Routing, dynamic views, responsive layouts.',
        skills: 'React, React Router, MUI, GitHub collaboration, implementation of external APIs.',
        application: 'Created React components and responsive design.',
        takeaways: 'Learned component reusability and better state handling.',
        contribution: 'As a part of a team I was responsible for creating the front-end UI, including the routing and dynamic views and utilizing external APIs.',
        reflection: 'Demonstrated frontend development skills, focusing on responsive design and component architecture. I contributed to the team by implementing routing and dynamic views, ensuring a seamless user experience.',
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
        contribution: 'As a part of a team I was responsible for setting up the front-end UI and helping connect it to the back-end API.',
        reflection: 'Showcased deployment skills, including Docker configuration and Render setup. I contributed to the team by setting up the front-end UI and ensuring it was properly connected to the back-end API, demonstrating an understanding of real-world deployment practices.',
        link: 'https://github.com/E-DISTRICT/Class-Management',
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
          <Grid item xs={12} md={10} key={project.title}>
            {project.isConfidential ? (
              <>
                <Paper
                  onClick={handleOpen}
                  sx={{
                    position: 'relative',
                    height: { xs: 250, sm: 300, md: 350 },
                    width: { xs: '100%', sm: '90%', md: '80%', lg: '700px' },
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

                <Modal
                  open={openModal}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{ timeout: 500 }}
                >
                  <Fade in={openModal}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        width: { xs: '90%', sm: '80%', md: 500 },
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        Bootcamp Final Project
                      </Typography>
                      <Typography variant="body2">
                        This project was built as part of a Verizon-sponsored hackathon. Due to internal confidentiality
                        policies, I’m unable to share source code or detailed implementation information.
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Paper
                  sx={{
                    position: 'relative',
                    height: { xs: 250, sm: 300, md: 350 },
                    width: { xs: '100%', sm: '90%', md: '80%', lg: '700px' },
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
            )}

            <Accordion sx={{ mt: 2, width: { xs: '100%', sm: '90%', md: '80%', lg: '700px' }, mx: 'auto' }}>
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
                      {label === 'link' && typeof content === 'string' && content.startsWith('http') ? (
                        <a href={content} target="_blank" rel="noopener noreferrer">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
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
