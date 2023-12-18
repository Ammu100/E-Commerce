import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Box, Button, Container, Menu, MenuItem, Tab, Tabs, Toolbar } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import data from '../../utils/data';
import HelpIcon from '@mui/icons-material/Help';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Navbar_2 = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const sectionItems = data.categories.map((item, index) => (
        <MenuItem key={index}
            onClick={handleClose}
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
        </MenuItem>
    ));

    const sectionPages = data.pages.map((page) => (
        <Tab
        sx={{fontWeight:"700"}}
         label={page} />
    ));


    return (
        <>
            <AppBar
                sx={{
                    backgroundColor: 'inherit',
                    position: 'static',
                }}
            >
                <Container maxWidth="xl">
                    <StyledToolbar>
                        <div>

                            <Button
                                id="basic-button"
                                aria-controls={anchorEl ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={anchorEl ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ color: 'black' }}
                                variant='contained'

                                color='warning'
                            >
                                Categories
                                <ListIcon sx={{ marginLeft: "5px" }} />
                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {sectionItems}
                            </Menu>
                        </div>

                        <Tabs>
                            {sectionPages}
                        </Tabs>
                        <Box 
                        sx={{display:"flex", alignItems:"center"}}>
                            <HelpIcon
                            sx={{color:"black"}}/>
                            <Button variant='text'>Help</Button>
                        </Box>

                    </StyledToolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar_2;
