import React, { useState } from 'react';
import { AppBar, Avatar, Box, Container, Divider, InputBase, Menu, MenuItem, Toolbar, Drawer, List, ListItem, ListItemText, styled } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../component/Assets/logo2.svg'
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const SearchInput = styled(InputBase)({
    borderRadius: "10px",
    paddingLeft: "10px",
    backgroundColor: "white",
    // width:"400px"
});

const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
    fontSize: 'small',
    padding: '8px 16px',
    justifyContent: 'left',
    marginBottom: '8px',
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
            <Box>
                <AppBar position='sticky'>
                    <Container maxWidth='xl'>
                        <StyledToolbar>
                            <img src={logo} alt="" />
                            <search >
                                <SearchInput
                                    sx={{ display: { xs: "none", sm: "block" } }}
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </search>
                            <SearchIcon sx={{ display: { xs: "block", sm: "none" } }} />
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
        </>
    );
};

export default Navbar;
