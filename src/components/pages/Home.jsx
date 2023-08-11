import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Home() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} id='home'>
        <Flex p={8} flex={1} align={'center'} justify={'center'} mt={[36,0]} >
          <Stack spacing={6} w={'full'} maxW={'lg'} >
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Technophile
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Coder & Learner 
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Enthusiastic Web Developer with a Proficiency in MERN<br/>
            Crafting User-Centric Experiences to Empower and Inspire. 
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                About Me
              </Button>
              <Button rounded={'full'}>View My Projects</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1.03} pt={20}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://media.discordapp.net/attachments/995431305066065950/1103775389031092225/ilias_brz_Create_a_super_realistic_image_of_a_young_boy_happily_b17d7b67-c8d3-4c2a-9272-5880d79acc65.png?width=862&height=862'}
          />
        </Flex>
      </Stack>


      
    );
  }