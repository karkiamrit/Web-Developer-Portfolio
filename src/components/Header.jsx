import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher'; // Import the ColorModeSwitcher component

const Links = ['Dashboard', 'Projects', 'Contact', 'Achievements', 'Hobbies'];

const NavLink = ({ children }) => (
  <Link
    px={1}
    py={2}
    height="40px" // Set a specific height for NavLink
    color={'blue.400'}
    textDecoration="none"
    rounded="md"
    _hover={{
      textDecoration: 'none',
      color: 'blue.600',
    }}
    href="#"
  >
    {children}
  </Link>
);

function Header() {
  return (
    <Box px={4} py={3} color="white" boxShadow="md" position="fixed" top={0} left={0} right={0} zIndex={999}>
      <Flex maxW="1200px" mx="auto" alignItems="center" justifyContent="space-between">
        <Avatar
          size="sm"
          height="50"
          rounded="full"
          src="/logo.svg"
          _hover={{ cursor: 'pointer', opacity: 0.8 }}
        />
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
        <Flex alignItems="center">
          <ColorModeSwitcher /> {/* Add the ColorModeSwitcher component here */}
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
              border="none"
            >
              <Avatar
                size="sm"
                height="50"
                width="50"
                rounded="full"
                src="/profilepic.png"
                _hover={{ cursor: 'pointer', opacity: 0.8 }}
              />
            </MenuButton>
            <MenuList color="white" rounded="lg" zIndex={1}>
              {Links.map((link) => (
                <MenuItem
                  key={link}
                  _hover={{
                    bg: 'white',
                    color: 'skyblue',
                  }}
                >
                  {link}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
