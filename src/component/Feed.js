import { Box, Typography } from "@mui/material";
import banner_1 from "../component/Assets/category-banner-top-layout-2.png"
import React from 'react';

import styled from "@emotion/styled";

const StyleBox = styled(Box)({
    backgroundImage: `url(${banner_1})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    color: 'white', 
    padding: '20px', 
    textAlign: 'center', 
    height:"400px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const Feed = () => {



    
    return (
        <StyleBox>
           <Typography variant="h3" 
           sx={{paddingBottom:"20px"}}>
           Home 19 Collection Featured Products
           </Typography>
           <Typography>
           Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos.
            Duis tristique del ante le maliquam praesent murna de tellus laoreet cosmopolis.
           </Typography>
        </StyleBox>
    );
};

export default Feed;
