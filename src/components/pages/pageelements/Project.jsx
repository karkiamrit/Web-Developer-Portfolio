import React from 'react';
import { Card, Image, Divider, CardBody, Heading, ButtonGroup, CardFooter, Stack, Button, Text } from '@chakra-ui/react';


function Project(props) {
    const reroute=()=>{
        let githublink=props.github
        window.location.href=githublink
    }
    return (
        <div>
            <Card maxW='sm' float={'left'} mt={100} ml={79} mr={19} mb={100}>
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
                    <ButtonGroup spacing='2' >
                        <Button onClick={reroute}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            View in Github
                        </Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Project
