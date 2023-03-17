
import {
  IconButton,

  Box,
  CloseButton,
  Flex,
  HStack,

  Icon,
  useColorModeValue,

  Drawer,
  DrawerContent,
  Text,
  useDisclosure,

  useColorMode,

  Divider,
} from '@chakra-ui/react';
import {
  FiHome,
  FiCompass,
  FiMenu,


} from 'react-icons/fi';

import ThemeToggle from './ThemeToggle';


import AppSearch from './Input/AppSearch';
import Link from 'next/link';
import GoBack from './Accessibility/GoBack';

const LinkItems = [
  { name: 'Explore', icon: FiCompass, href: '/' },
  {
    name: 'Home', icon: FiHome, href: '/home'
  },
  // { name: 'Trending', icon: FiTrendingUp, href: '/trending' },


  // { name: 'Favourites', icon: FiStar, href: '/favourites' },

  // { name: 'Settings', icon: FiSettings, href: '/explore' },
];





export default function SidebarWithHeader({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh"
      // bg={useColorModeValue('gray.100', 'gray.900')}
      zIndex={100}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      transition="3s ease"
      // bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href="/">
          <Text fontSize="2xl" fontWeight="bold" cursor='pointer'>
            Stream World
          </Text>
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        // <Link as={NextLink} key={link.name} href={link.href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>

        <Link
          key={link.name}
          href={link.href}
        >
          <NavItem icon={link.icon}>

            {link.name}
          </NavItem>
        </Link>
      ))}

      {/* <Divider /> */}
      {/* OPTION - Add Thmeme Toggler in SideBar */}
      {/* <ThemeToggle /> */}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (

    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      {...rest}>
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>

  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      // bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      {/* back arrow icon  */}
      <GoBack />
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text> */}


      <HStack mx={2} spacing={{ base: '2', md: '6' }} width={{
        base: '100%',
        sm: '100%',
        md: '100%'
      }}
        justifyContent="space-between"
      >


        {/* <AppSearch /> on left side 50% width */}
        <AppSearch />


        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <ThemeToggle />
      </HStack>
    </Flex>
  );
};