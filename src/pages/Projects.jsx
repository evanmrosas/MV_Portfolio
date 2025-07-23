import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    { id: 'inventory', title: 'Inventory App' },
    { id: 'hackathon', title: 'Bootcamp Hackathon' },
    { id: 'backend', title: 'Backend Module Project' },
    { id: 'frontend', title: 'Frontend Module Project' },
    { id: 'deployment', title: 'Deployment Module Project' },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <List>
        {projects.map((project) => (
          <ListItem button component={Link} to={`/projects/${project.id}`} key={project.id}>
            <ListItemText primary={project.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
