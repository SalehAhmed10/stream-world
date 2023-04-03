import { Box, Flex } from "@chakra-ui/react";
import GoBack from "../Accessibility/GoBack";
import AppSearch from "../Input/AppSearch";
import ThemeToggle from "../ThemeToggle";
import { useEffect, useState } from "react";

export default function JustHeader() {

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
        <Box position={'fixed'}  width={'100vw'} height={'90px'} 
        className={scrollPosition > 3 ? "active" : "default"}
        >

            <Flex
                justifyContent={'space-between'}
                px={5}
                align={'center'}
                height={'100%'}
            >

                <Box
                    display={{ base: "flex", md: "flex" }}
                    alignItems="center"
                    justifyContent="space-between"
                    width={{
                        base: '85%',
                        md: "70%"

                    }}
                    gap={{
                        base: '2',
                        md: "10"

                    }}
                    height={'100%'}
                >
                    <GoBack />
                    <AppSearch/>
                </Box>
                <Box
                    display={{ base: "flex", md: "flex" }}
                    width={{
                        base: '15%',
                        md: "30%"
                    }}
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                    height={'100%'}

                >
                    <ThemeToggle
                        bg={true}
                    />
                </Box>
            </Flex>
        </Box>
    )
}