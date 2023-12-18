import React, { useState } from 'react';
import { AppBar, Avatar, Box, Container, Divider, InputBase, Menu, MenuItem, Toolbar, Drawer, List, ListItem, ListItemText, styled } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../Assets/logo2.svg';
import SearchIcon from '@mui/icons-material/Search';
import Navbar_2 from './Navbar_2';
import ArticleIcon from '@mui/icons-material/Article';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    color: "black",
});

const SearchInput = styled(InputBase)({
    borderRadius: "10px",
    paddingLeft: "10px",
    backgroundColor: "white",
    color: "black",
    width: "400px",
    "&:focus": {
        backgroundColor: "white",
    },
});

const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
    fontSize: 'small',
    padding: '8px 16px',
    justifyContent: 'left',
    marginBottom: '8px',
    color: "black",
});

const StyledAvatarContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <Box >

                <AppBar
                    sx={{ backgroundColor: "orange" }}
                    position='sticky'>
                    <Container maxWidth='xl'>
                        <StyledToolbar>

                            <SearchIcon
                                sx={{ display: { xs: "block", sm: "none" } }} />

                            <img src={logo} alt="" />

                            <SearchInput
                                sx={{ display: { xs: "none", sm: "block" } }}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />


                            <StyledAvatarContainer>
                                <AddShoppingCartIcon sx={{ marginRight: "20px" }} onClick={handleDrawerOpen} />
                                <Avatar
                                    sx={{ width: 32, height: 32, cursor: 'pointer' }}
                                    onClick={handleAvatarClick}
                                >
                                    A
                                </Avatar>
                            </StyledAvatarContainer>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <StyledMenuItem onClick={handleMenuClose}>
                                    <Avatar
                                        sx={{ marginRight: "10px" }} />Profile
                                </StyledMenuItem>
                                <StyledMenuItem onClick={handleMenuClose}>
                                    <Avatar
                                        sx={{ marginRight: "10px" }} />My Account
                                </StyledMenuItem>
                                <Divider />
                                <StyledMenuItem onClick={handleMenuClose}>
                                    <PersonAddIcon
                                        sx={{ marginRight: "10px" }} />Add another account
                                </StyledMenuItem>
                                <StyledMenuItem onClick={handleMenuClose}>
                                    <SettingsIcon
                                        sx={{ marginRight: "10px" }} />Settings
                                </StyledMenuItem>
                                <StyledMenuItem onClick={handleMenuClose}>
                                    <LogoutIcon
                                        sx={{ marginRight: "10px" }} />Logout
                                </StyledMenuItem>
                            </Menu>
                        </StyledToolbar>
                    </Container>
                </AppBar>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <List>
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemText primary="Item 1" />
                        </ListItem>
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemText primary="Item 2" />
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
            <Navbar_2 />
        </>
    );
};

export default Navbar;
