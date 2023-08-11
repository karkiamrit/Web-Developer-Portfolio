import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const About = () => {
    return (
        <div id='about'>
            <Box boxSize='sm' w="400px"
                ml={400}
                h="400px"
                position="relative"
                overflow="hidden"
                transition="transform 0.3s"
                _hover={{
                    transform: "rotate(5deg) scale(1.1)",
                }} >
                <Image src='https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/279307037_2496368180494763_5064903607472320811_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JvKXraRP_NkAX-7HKZt&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDXslWNryNgoSFyl2lFYbeiI5MdRH8U7QlhnKJMf9UVjA&oe=64DA30DB' alt='Dan Abramov' />
            </Box>
        </div>
    )
}

export default About;
