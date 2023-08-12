import "./AboutContainer.css";
import { HStack, Image, Text, Heading, Container, StackDivider } from '@chakra-ui/react';
const About = () => {
    return (
        <Container>
            <Heading
                pt={30}
                color={'blue.400'}
                fontSize={{
                    base: '4xl',
                    md: '5xl',
                }}>
                About Me
            </Heading>
            <HStack marginTop="30" spacing="2" display="flex" alignItems="center" id='about' divider={<StackDivider borderColor='blue.100' />}>

                <Image
                    borderRadius="full"
                    h="500px"
                    w="500px"
                    src="about-me@2x.png"
                    alt={"profile_image"}
                    objectFit={"cover"}
                   
                />
                <Text fontWeight="medium">Hello World</Text>
            </HStack>

        </Container>




    );
};

export default About;
