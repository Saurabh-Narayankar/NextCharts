import {
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { useRef } from "react";

const ChartsDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        
        color='white'
        bgGradient="linear(to-r, purple.400, purple.600)"
        _hover={{
          bgGradient: "linear(to-r, purple.500, purple.800)",
        }}
        _active={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
        size={["xs", "sm", "md", "lg"]}
        ref={btnRef}
        onClick={onOpen}
      >
        CHARTS
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.900">
          <Flex>
            <HStack marginBottom="5">
              <DrawerCloseButton size="lg" paddingTop="9" color="white" />
              <DrawerHeader fontSize="4xl" textColor="white">
                CHARTS
              </DrawerHeader>
            </HStack>
          </Flex>
          <DrawerBody>
            
            <Flex flexDirection="column">
            <Link href="/charts/linechart">
              <Button
                marginBottom="5"
                fontSize="xl"
                variant="outline"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                Line-Chart
              </Button></Link>
              <Link href="/charts/funnelchart"><Button
                marginBottom="5"
                fontSize="xl"
                variant="outline"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                Funnel-Chart
              </Button></Link>
              <Link href="/charts/areabumpchart"><Button
                marginBottom="5"
                fontSize="xl"
                variant="outline"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                AreaBump-Chart
              </Button></Link>
              <Link href="/charts/radialbarchart"><Button
                marginBottom="5"
                fontSize="xl"
                variant="outline"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                RadialBar-Chart
              </Button></Link>
              <Button
                marginBottom="5"
                fontSize="xl"
                variant="outline"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                hello
              </Button>
              <Button
                marginBottom="5"
                fontSize="xl"
                variant="outline"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                hello
              </Button>
            </Flex>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChartsDrawer;
