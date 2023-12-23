import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Butterfly from '../assets/icons/butterfly'
import Link from 'next/link'

const pages = ['bio', 'integrantes', 'lanzamientos', 'videos', 'fechas', 'arte'];

const HeaderMobile = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleMenuLink = () => {
        setAnchorElNav(null);
    };

    return (
        
        <AppBar position="relative">
            <Container maxWidth="xl" className="headerHome">
                <Toolbar disableGutters>
                    <Link className="butterFlyContainer" href="/">
                        <Butterfly />
                    </Link>
                    <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleMenuLink}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleMenuLink} >
                                    <Link href={page}>
                                    <Typography className="headerElement" textAlign="center">{page}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'orbitron',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        DESETERNIDAD
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color: 'white' } }}>
                        {pages.map((page) => (
                            <Button
                                className="headerElement"
                                href={page}
                                key={page}
                                onClick={handleMenuLink}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}

                            </Button>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
  
    );
}
export default HeaderMobile;