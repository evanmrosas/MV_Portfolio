import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import { Link } from 'react-router-dom';

export default function BottomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: 16,
        left: 0,
        right: 0,
        mx: 'auto',
        width: 'fit-content',
        px: 2,
        py: 0.5,
        borderRadius: '999px',
        backgroundColor: '#ffffff',
        color: '#757575',
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 4,
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: '48px' }}>
        <Tooltip title="Home" arrow placement="top">
          <IconButton
            color="inherit"
            aria-label="Home"
            component={Link}
            to="/"
          >
            <HomeFilledIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="About Me" arrow placement="top">
          <IconButton
            color="inherit"
            aria-label="About Me"
            component={Link}
            to="/about"
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Projects" arrow placement="top">
          <IconButton
            color="inherit"
            aria-label="Projects"
            component={Link}
            to="/projects"
          >
            <DevicesIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
