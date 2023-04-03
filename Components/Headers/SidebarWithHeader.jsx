"use client";

import React, { ReactNode, useEffect, useState } from "react";
import "./sidebarwithheader.css";
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { FiCompass, FiMenu } from "react-icons/fi";
import AppSearch from "../Input/AppSearch";
import { useSideBarToggle } from "@/context/SideBarToggle";
import SideBarToggle from "../Accessibility/SideBarToggle";
import ThemeToggle from "../ThemeToggle";
import { usePathname } from "next/navigation";
import GoBack from "../Accessibility/GoBack";
import Link from "next/link";
// import Logo from "@/public/assets/logo.png"
import Logo from "@/public/assets/logo-bgless.png";
import Image from "next/image";

const LinkItems = [{ name: "Explore", icon: FiCompass, href: "/" }];

export default function SidebarWithHeader({ children }) {
  const { isSideBarOpen, toggleSideBar } = useSideBarToggle();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      // bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        isSideBarOpen={isSideBarOpen}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} isSideBarOpen={isSideBarOpen} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      <MobileNav onOpen={onOpen} isSideBarOpen={isSideBarOpen} />
      {/* <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box> */}
      <Box
        transition="all 0.5s ease-in-out"
        ml={
          isSideBarOpen
            ? { base: 0, md: 48, lg: 48 }
            : { base: 0, md: 20, lg: 20 }
        }
        p="4"
      >
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ isSideBarOpen, onClose, ...rest }) => {
  return (
    <Box
      transition="all 0.5s ease-in-out"
      // bg={useColorModeValue("white", "gray.900")}
      bg={useColorModeValue("white", "dark.secondary")}
      shadow="none"
      boxShadow={"none"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      // w={{ base: 'full', md: 60 }}
      w={
        isSideBarOpen
          ? { base: 48, sm: "48", md: 48 }
          : { base: 20, sm: "20", md: 20 }
      }
      margin="0"
      padding={0}
      pos="fixed"
      h="full"
      {...rest}
    >
      {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between"> */}
      <Flex
        // h={isSideBarOpen ? "10" : "32"}
        h={isSideBarOpen ? { base: "10", sm: "10", md: "10" } : { base: "32", sm: "32", md: "20" }}
        alignItems="center"
        mt={isSideBarOpen ? 4 : 0}
        mx="6"
        flexDirection={isSideBarOpen ? "row" : "column-reverse"}
        // reverse
        justifyContent={isSideBarOpen ? "space-between" : "space-evenly"}
        // justifyContent="space-evenly"
      >

        <Box
          display={{
            base: "flex",
            md: "none",
          }}
        >
          <ThemeToggle />
        </Box>
        {/* </Box> */}
        <Box>
          <SideBarToggle />
        </Box>

        {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
      </Flex>
      <Box
          display={{
            base: "flex",
            md: "flex",
          }}
          justifyContent={"flex-start"}
          alignItems={"center"}
          pt={isSideBarOpen ? 4 : 0}
          mx={2}

        >
          {/* <ThemeToggle /> */}
          <Link href="/">
          <Image src={Logo} alt="logo" height={isSideBarOpen? '50' : '50'}/>
          </Link>
        <Box 
        display={{
          base: "flex",
          md: "flex",
        }}
        alignItems={"center"}
        >
          <Text fontSize="1xl" fontFamily="monospace" fontWeight="bold">
            {isSideBarOpen ? "Stream World" : null}
            
          </Text>
        </Box>
          </Box>
      


      <Divider />

      <Box mx={"8"}>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {/* {isSideBarOpen ? "SW" : null} */}
          {/* <img src={Logo} alt="logo" className="logo" /> */}
        </Text>
      </Box>

      {LinkItems.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          // prevent page reload
          passHref
        >
          <NavItem icon={link.icon}>{isSideBarOpen ? link.name : null}</NavItem>
        </Link>
      ))}
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
        bg: "cyan.400",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const MobileNav = ({ isSideBarOpen, onOpen, ...rest }) => {
  const pathname = usePathname();
  const isNotHome = pathname !== "/";

  // keep track of the current scroll position in state
  const [scrollPosition, setScrollPosition] = useState(0);
  // listen to scroll events and update state
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(position)
  };
  // add and remove the scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex
      // ml={{ base: 0, md: 60 }}
      transition="all 0.5s ease-in-out"
      ml={
        isSideBarOpen
          ? { base: 0, md: 48, lg: 48 }
          : { base: 0, md: 20, lg: 20 }
      }
      px={{ base: 4, md: 4 }}
      position="fixed"
      w={{ base: "full", md: "auto" }}
      h="20"
      right={{ base: "0", md: "0" }}
      top={{ base: "0", md: "0" }}
      left={{ base: "0", md: "0" }}
      zIndex="999"
      className={scrollPosition > 5 ? "active" : "default"}
      height="20"
      alignItems="center"
      // bg={useColorModeValue('white', 'gray.900')}
      // borderBottomWidth="1px"
      // borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: "space-between", md: "flex-start" }}
      {...rest}
    >
      {/* <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      /> */}

      {/* <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text> */}

      {/* <HStack spacing={{ base: '0', md: '20' }}> */}

      <Flex
        width={{ base: "100%", md: "100%" }}
        alignItems={"center"}
        justifyContent={"center"}
        px={{
          base: 0,
          md: 4,
          lg: 4,
        }}
        gap={2}
      >
        <GoBack />
        <AppSearch />
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          // backgroundColor={useColorModeValue("white", "gray.900")}
          backgroundColor={useColorModeValue("gray.300", "gray.700")}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Box
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <ThemeToggle />
        </Box>
      </Flex>
      {/* </HStack> */}
    </Flex>
  );
};
