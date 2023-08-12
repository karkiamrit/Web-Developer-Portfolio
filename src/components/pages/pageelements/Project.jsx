import React from 'react';
import { Card, Box, Image, Divider, CardBody, Heading, CardFooter, Stack, Button, Text } from '@chakra-ui/react';


function Project(props) {
    const reroute=()=>{
        let githublink=props.github
        window.location.href=githublink
    }
    return (
        <Box >
            <Card maxW='sm' float={'left'} mt={50} >
                <CardBody>
                    <Image
                        src={props.image}
                        alt={props.name}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.title}</Heading>
                        <Text>
                            {props.description}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                        <Button onClick={reroute}
                            ml={'31%'}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            View in Github
                        </Button>

            
                </CardFooter>
            </Card>
        </Box>
    )
}

export default Project
