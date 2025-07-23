import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {id.toUpperCase()} Project
      </Typography>
      <Typography>
        This page will include the reflection, overview, skills, repo link, and deployment link for the {id} project.
      </Typography>
    </div>
  );
}
