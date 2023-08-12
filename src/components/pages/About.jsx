import { HStack, Box, Image, Text, Heading, Container, StackDivider } from '@chakra-ui/react';

const About = () => {
    return (
        <Container id='about' >
            <Heading
                pt={30}
                align="center"
                justify="center"
                color={'blue.400'}
                fontSize={{
                    base: '4xl',
                    md: '5xl',
                }}>
                About Me
            </Heading>
            <HStack marginTop="30" spacing={3} display="flex" alignItems="center" divider={<StackDivider borderColor='blue.100' ml={[0, 20]} />}  >

                <Image
                    borderRadius="full"
                    h="600px"
                    w="600px"
                    src="about-me@2x.png"
                    alt={"profile_image"}
                    objectFit={"cover"}
                    ml={[0, -380]}
                    

                />
                 <Box style={{ marginLeft: '100px' }} mr={-400} >
                    <Text fontWeight="medium" color={'black.100'} fontSize={30} fontFamily={'sans-serif'}>
                        Hello! I'm <strong style={{ color: '#64B5F6' }}>Amrit Jung Karki</strong>, a passionate MERN stack developer with a love for crafting clean, efficient, and user-friendly web applications. With a background in IT Engineering and a keen eye for detail, I'm dedicated to creating seamless digital experiences that bring value to users.
                    </Text>
                </Box>
            </HStack>
           

        </Container>




    );
};

export default About;
