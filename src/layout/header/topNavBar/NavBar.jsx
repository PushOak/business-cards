import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import LogoIcon from './logo/LogoIcon';
import Logo from './logo/Logo';
import LeftNavBar from './leftNavigation/LeftNavBar';
import RightNavBar from './right-navigation/RightNavBar';

export default function NavBar() {
    return (
        <>
            <AppBar position='sticky' color='primary'>
                <Toolbar sx={{justifyContent:'space-between'}}>
                    <LeftNavBar />
                    <RightNavBar />
                </Toolbar>
            </AppBar>
        </>
    )
}
