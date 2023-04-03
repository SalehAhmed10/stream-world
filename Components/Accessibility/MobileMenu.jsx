

import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { Children, useState } from 'react'

export default function MobileMenu({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')

  return (
    <>
        {children}
    </>
  )
}
