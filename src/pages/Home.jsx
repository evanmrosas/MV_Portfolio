import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
        <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 300 }} // 🔹 You can use 500, 600, or 700
        >
        Software Engineer turning ideas into intuitive, scalable applications.
        </Typography>
        <Typography
            variant="h3"
            sx={{ fontSize: 18, color: '#555' }} // 🔹 Lighter text color
        >
            With full-stack versatility and a passion for clean, user-focused code, I bring digital concepts to life.
        </Typography>
    </div>
  );
}
