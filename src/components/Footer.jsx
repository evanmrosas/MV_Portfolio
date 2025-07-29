import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
return (
<Box
    component="footer"
    sx={{
    mt: 8,
    py: 4,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid #ddd',
    }}
>
    <Typography variant="body2" color="text.secondary">
    © {new Date().getFullYear()} Evan Rosas — All rights reserved.
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
    Connect with me on{' '}
    <Link href="https://github.com/yourusername" target="_blank" rel="noopener">
        GitHub
    </Link>{' '}
    |{' '}
    <Link href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener">
        LinkedIn
    </Link>
    </Typography>
</Box>
);
}
