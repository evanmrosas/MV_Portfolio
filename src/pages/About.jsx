import { Box, Typography } from '@mui/material';
import headshot from '../assets/headshot.jpg';

export default function About() {
  return (
    <div>
      <Typography 
        variant="h1" 
        gutterBottom
        sx={{ fontWeight: 400 }}
      >
        About Me
      </Typography>

      <Typography 
        paragraph
        variant="h6"
        sx={{ mb: 4 }}
      >
        I'm a full-stack developer with a background in customer service and a passion for using technology 
        to solve real-world problems. My journey began at Apple Inc., where I developed strong troubleshooting 
        and communication skills, and continued through an intensive coding bootcamp focused on building 
        practical, user-focused applications.
      </Typography>

      {/* Image and wrapping text */}
      <div style={{ overflow: 'hidden' }}>
        <Box
          component="img"
          src={headshot}
          alt="Evan Rosas"
          sx={{
            width: '300px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '12px',
            float: 'left',
            marginRight: '30px',
            marginBottom: '20px',
          }}
        />

        <Typography variant="h5" sx={{ mb: 1 }}>
          Apprenticeship at Verizon
        </Typography>
        <Typography paragraph fontSize={16} sx={{ color: '#555', mb: 3 }}>
          I’m currently a Software Engineering Apprentice at <strong>Verizon</strong>, where I’ve spent over a year 
          developing full-stack applications in a professional, team-oriented environment. This experience has provided 
          me with hands-on exposure to real-world engineering practices and workflows.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1 }}>
          Why I Do What I Do
        </Typography>
        <Typography paragraph fontSize={16} sx={{ color: '#555', mb: 3 }}>
          I’m driven by a desire to build things that help people — whether that means making tools more intuitive, 
          streamlining processes, or just making the web a more accessible place. I find energy in problem-solving 
          and take pride in creating software that is useful and meaningful.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1 }}>
          Areas of Interest
        </Typography>
        <Typography paragraph fontSize={16} sx={{ color: '#555', mb: 3 }}>
          I’m passionate about scalable architecture, accessible design, and building human-centered software. 
          I enjoy working on both the front-end and back-end, with a growing interest in DevOps and CI/CD pipelines.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1 }}>
          Teams I've Worked On
        </Typography>
        <Typography paragraph fontSize={16} sx={{ color: '#555', mb: 3 }}>
          During my time at Verizon, I’ve worked on cross-functional teams focused on enhancing internal tools 
          and improving the developer experience. I’ve collaborated closely with designers, engineers, and product 
          managers in an Agile environment.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1 }}>
          My Impact
        </Typography>
        <Typography paragraph fontSize={16} sx={{ color: '#555', mb: 3 }}>
          My contributions have helped streamline engineering processes, improve internal documentation, 
          and enhance team productivity. I take initiative, support my teammates, and strive to leave things 
          better than I found them — whether it’s refactoring code or simplifying user flows.
        </Typography>

        <Typography paragraph fontSize={16} sx={{ color: '#555', mb: 3 }}>
          I’m excited to keep learning, keep building, and continue contributing to software that makes a difference.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
          Education & Certifications
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Coding Dojo Coding Bootcamp
          </Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Online &nbsp;|&nbsp; Graduated May 2024
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            34-week intensive course focused on Software/Web Development.
          </Typography>
          <Typography variant="body2">
            Languages & Tools: HTML, CSS, JavaScript, Python, Java, MySQL
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Tarrant County College (TCC)
          </Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Mansfield, Texas &nbsp;|&nbsp; 2021 – Present
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Pursuing coursework toward a Bachelor's degree in Software Engineering.
          </Typography>
          <Typography variant="body2">GPA: 3.8</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Certifications
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Certificate of Completion – Software Development
          </Typography>
          <Typography variant="body2">
            Coding Dojo Bootcamp (Awarded May 2024)
          </Typography>
        </Box>
      </div>
    </div>
  );
}
