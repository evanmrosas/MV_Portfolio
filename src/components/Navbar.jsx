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
import headshot from '../assets/headshot.jpg';
import linkedinLogo from '../assets/linkedin-logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import githubLogo from '../assets/github-logo.png';


const pages = [
{ label: 'Home', path: '/' },
{ label: 'About', path: '/about' },
{ label: 'Projects', path: '/projects' }
];

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
    sx={{ backgroundColor: '#fff', color: '#000', mb: 12 }} // White bg, black text
>
    <Container maxWidth="xl">
    <Toolbar disableGutters>

        {/* Avatar that links to home */}
        <Link to="/" style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ flexGrow: 0, mr: 2, display: { xs: 'none', md: 'flex', alignItems: 'center'} }}>
            <Tooltip title="Go to Home">
                <Avatar
                    alt="Portfolio Avatar"
                    src='src/assets/headshot.jpg'
                    sx={{ cursor: 'pointer', width: 56, height: 56 }}
                />
            </Tooltip>
            <Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        color: '#000',
                        textDecoration: 'none',
                        ml: 2
                    }}
                >
                    Evan Rosas
                </Typography>
            </Box>
            </Box>
        </Link>
        {/* Menu icon for mobile view */}
        <Box
        sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'flex-end',
            ml: 2
        }}
        >
        <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: '#000' }} // Black icon
        >
            <MenuIcon />
        </IconButton>

        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >
            {pages.map((page) => (
            <MenuItem
                key={page.label}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.path}
            >
                <Typography textAlign="center" sx={{ color: '#000' }}>
                {page.label}
                </Typography>
            </MenuItem>
            ))}
        </Menu>
        </Box>

        {/* Navigation buttons for desktop */}
        <Box
        sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end'
        }}
        >
        <>
        <Button
            key="LinkedIn"
            href="https://www.linkedin.com/in/evan-rosas-aa75892b6/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: '#000', display: 'flex', alignItems: 'center' }}
        >
            <img
            src='src/assets/linkedin-logo.png'
            alt="LinkedIn"
            style={{ width: 30, height: 30, marginRight: 8 }}
            />
        </Button>

        <Button
            key="Instagram"
            href="https://www.instagram.com/evan_rosas/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: '#000', display: 'flex', alignItems: 'center' }}
        >
            <img
            src='src/assets/instagram-logo.png'
            alt="Instagram"
            style={{ width: 40, height: 30, marginRight: 8 }}
            />
        </Button>

        <Button
            key="GitHub"
            href="https://github.com/evanmrosas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: '#000', display: 'flex', alignItems: 'center' }}
        >
            <img
            src='src/assets/github-logo.png'
            alt="GitHub"
            style={{ width: 30, height: 30, marginRight: 8 }}
            />
        </Button>
        </>

        </Box>
    </Toolbar>
    </Container>
</AppBar>
);
}

export default ResponsiveAppBar;
