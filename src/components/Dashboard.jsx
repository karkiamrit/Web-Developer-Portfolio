import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { Box, AbsoluteCenter } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <div>
            <Home />
            <Box position='absolute' mt={50} fontSize={20} width={'full'} fontWeight={'bold'}>
                <AbsoluteCenter axis='both' color={'blue.400'}>
                    ABOUT
                </AbsoluteCenter>
            </Box >
            <About/>
            <Box position='absolute' mt={50} fontSize={20} width={'full'} fontWeight={'bold'}>
                <AbsoluteCenter axis='both' color={'blue.400'}>
                    MY PROJECTS
                </AbsoluteCenter>
            </Box >
            
            <Projects  />

        </div>
    )
}

export default Dashboard;
