import React from 'react';
import Project from './pageelements/Project';
import { Grid,Heading,Box } from '@chakra-ui/react';

function Projects() {
    return (
        <Box id='projects'>
            <Heading
              pt={50}
              color={'blue.400'}
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              My Projects
            </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(380px, 1fr))" gap={13.5} ml={9} pl={20} pr={14} align={'center'}>
            
            <Project title="Sign Language Detection"
                github="https://github.com/karkiamrit/Sign_Language_To_Voice-MERN"
                description="This is a sign language project"
                image="https://www.rickhansen.com/sites/default/files/2021-09/happy-fall-asl.png" />
            <Project title="Sign Language Detection"
                github="https://github.com/karkiamrit/Sign_Language_To_Voice-MERN"
                description="This is a sign language project"
                image="https://www.rickhansen.com/sites/default/files/2021-09/happy-fall-asl.png" />
            <Project title="Sign Language Detection"
                github="https://github.com/karkiamrit/Sign_Language_To_Voice-MERN"
                description="This is a sign language project"
                image="https://www.rickhansen.com/sites/default/files/2021-09/happy-fall-asl.png" /> 
            <Project title="Sign Language Detection"
                github="https://github.com/karkiamrit/Sign_Language_To_Voice-MERN"
                description="This is a sign language project"
                image="https://www.rickhansen.com/sites/default/files/2021-09/happy-fall-asl.png" />  
            <Project title="Sign Language Detection"
                github="https://github.com/karkiamrit/Sign_Language_To_Voice-MERN"
                description="This is a sign language project"
                image="https://www.rickhansen.com/sites/default/files/2021-09/happy-fall-asl.png" />
            <Project title="Sign Language Detection"
                github="https://github.com/karkiamrit/Sign_Language_To_Voice-MERN"
                description="This is a sign language project"
                image="https://www.rickhansen.com/sites/default/files/2021-09/happy-fall-asl.png" />           

        </Grid>
        </Box>
    )
}

export default Projects
