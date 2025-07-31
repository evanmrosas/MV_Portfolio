import * as React from 'react';
import {
AppBar,
Toolbar,
IconButton,
Menu,
MenuItem,
Container,
Avatar,
Button,
Tooltip,
Box,
Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import headshot from '../assets/head_shot.jpg';
import linkedinLogo from '../assets/linkedin_logo.png';
import instagramLogo from '../assets/instagram_logo.png';
import githubLogo from '../assets/github_logo.png';

function ResponsiveAppBar() {
const [anchorElNav, setAnchorElNav] = React.useState(null);

const handleOpenNavMenu = (event) => {
setAnchorElNav(event.currentTarget);
};

const handleCloseNavMenu = () => {
setAnchorElNav(null);
};

return (
<AppBar
    position="static"
    elevation={0}
    sx={{ backgroundColor: '#fff', color: '#000', mb: 4 }}
>
    <Container maxWidth="xl">
    <Toolbar disableGutters>

        {/* Avatar and Name */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Tooltip title="Go to Home">
            <Avatar
                alt="Portfolio Avatar"
                src={headshot}
                sx={{ width: 48, height: 48, cursor: 'pointer' }}
            />
            </Tooltip>
            <Typography
            variant="h6"
            noWrap
            sx={{
                ml: 1,
                display: { xs: 'none', sm: 'block' },
                fontWeight: 700,
                color: '#000',
            }}
            >
            Evan Rosas
            </Typography>
        </Box>
        </Link>

        {/* Mobile Menu Icon */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
        <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
            aria-label="menu"
            sx={{ color: '#000' }}
        >
            <MenuIcon />
        </IconButton>

        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >
            <MenuItem>
            <Button
                href="https://www.linkedin.com/in/evan-rosas-aa75892b6/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#000' }}
            >
                <img src={linkedinLogo} alt="LinkedIn" width={24} style={{ marginRight: 8 }} />
                LinkedIn
            </Button>
            </MenuItem>
            <MenuItem>
            <Button
                href="https://www.instagram.com/evan_rosas/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#000' }}
            >
                <img src={instagramLogo} alt="Instagram" width={24} style={{ marginRight: 8 }} />
                Instagram
            </Button>
            </MenuItem>
            <MenuItem>
            <Button
                href="https://github.com/evanmrosas"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#000' }}
            >
                <img src={githubLogo} alt="GitHub" width={24} style={{ marginRight: 8 }} />
                GitHub
            </Button>
            </MenuItem>
        </Menu>
        </Box>

        {/* Desktop Social Icons */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button
            href="https://www.linkedin.com/in/evan-rosas-aa75892b6/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 0.5 }}
        >
            <img src={linkedinLogo} alt="LinkedIn" width={28} />
        </Button>
        <Button
            href="https://www.instagram.com/evan_rosas/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 0.5 }}
        >
            <img src={instagramLogo} alt="Instagram" width={34} />
        </Button>
        <Button
            href="https://github.com/evanmrosas"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 0.5 }}
        >
            <img src={githubLogo} alt="GitHub" width={28} />
        </Button>
        </Box>
    </Toolbar>
    </Container>
</AppBar>
);
}

export default ResponsiveAppBar;
