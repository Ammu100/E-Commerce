import React from 'react'
import TungstenIcon from '@mui/icons-material/Tungsten';
import SchoolIcon from '@mui/icons-material/School';
import CheckroomIcon from '@mui/icons-material/Checkroom'; 
import HomeIcon from '@mui/icons-material/Home';
import ToysIcon from '@mui/icons-material/Toys';
import WeekendIcon from '@mui/icons-material/Weekend';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import LightModeIcon from '@mui/icons-material/LightMode';
import RawOffIcon from '@mui/icons-material/RawOff';

const data = [];
data.categories = [{
    name: "Electronics",
    icon: <TungstenIcon/>
}, {
    name: "Accessorie",
    icon: <SchoolIcon/>
}, {
    name: "Clothing",
    icon: <CheckroomIcon/>
},
{
    name: "Homes",
    icon: <HomeIcon/>
},
{
    name: "Toys",
    icon: <ToysIcon/>
},
{
    name: "Furniture",
    icon: <WeekendIcon/>
},
{
    name: "Sports",
    icon: <SportsBaseballIcon/>
},
{
    name: "Gift and cards",
    icon: <CardGiftcardIcon/>
},
{
    name: "Machionery",
    icon: <MicrowaveIcon/>
},
{
    name: "Lights & Lighting",
    icon: <LightModeIcon/>
},
{
    name: "Raw Materials",
    icon: <RawOffIcon/>
}];


data.pages =["Homes","Shops","Product","Blogs","New In","Trends", "Collection"];


export default data
