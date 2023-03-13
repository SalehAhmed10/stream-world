import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function GoBack() {

    const router = useRouter()

    // onclick go back
    const goBack = () => {
        // window.history.back()
        router.back()
    }



    return (
        <div>
            <IconButton
                size="lg"
                variant="ghost"
                aria-label="open menu"
                icon={<FiArrowLeft />}
                onClick={goBack}
            />
        </div>
    )
}
