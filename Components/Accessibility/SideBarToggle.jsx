import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSideBarToggle } from '@/context/SideBarToggle';
// x icon 
import { FiMenu, FiX } from 'react-icons/fi';   
import {BiMenuAltLeft} from 'react-icons/bi'

function SideBarToggle() {
    const { isSideBarOpen, setIsSideBarOpen } = useSideBarToggle();
  return (
    // if sideopen is true show icon to close sidebar else show icon to open sidebar
    
    <Button
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        variant="ghost"
        aria-label="Toggle Navigation"
        display={{ base: "flex", md: "flex" }}
        fontSize="20px"
        // color="gray.500"
        _hover={{ color: "gray.600" }}
        _active={{ color: "gray.600" }}
        _focus={{ boxShadow: "none" }}
        >
        {isSideBarOpen ? <FiX /> : <BiMenuAltLeft />}
    </Button>

  )
}

export default SideBarToggle