import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileAnchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
        setMobileAnchorEl(null);
    };
  
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
        setMobileAnchorEl(event.currentTarget);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id='account-menu'
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
                <LogoutIcon sx={{mr: 1}} />
                <p>Log Out</p>
            </MenuItem>
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id='mobile-account-menu'
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem onClick={handleMobileMenuClose}>
                <GitHubIcon sx={{mr: 1}} />
                <p>Code</p>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
                <SettingsIcon sx={{mr: 1}} />
                <p>Settings</p>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMobileMenuClose}>
                <LogoutIcon sx={{mr: 1}} />
                <p>Log Out</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position='fixed' elevation={0} sx={{overflow: 'hidden', bgcolor: '#212121'}}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 3}}>
                        JARVIS
                    </Typography>
                    <HeadphonesIcon color="primary" sx={{position: 'absolute', margin: '0 auto', left: 0,right: 0, cursor: 'pointer'}} onClick={() => navigate('/')} />
                    <Box sx={{display:{ xs: 'none', md: 'flex' }}}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="github-icon"
                            sx={{ mr: 0}}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            component={Link}
                            to="/user"
                            sx={{ mr: 0}}>
                            <SettingsIcon />
                        </IconButton>
                        <Button color="inherit" sx={{mr: 3}} onClick={handleMenuOpen}>
                            <AccountCircle sx={{mr: 1}} />
                            <Typography variant='subtitle1'>
                                *NAME*
                            </Typography>
                        </Button>
                    </Box >
                    <Box sx={{display:{ xs: 'flex', md: 'none' }}}>
                        <Button color="inherit" sx={{mr: 3}} onClick={handleMobileMenuOpen}>
                            <AccountCircle sx={{mr: 1}} />
                            <Typography variant='subtitle1'>
                                *NAME*
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
                <Divider />
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    )
}

export default Navbar
