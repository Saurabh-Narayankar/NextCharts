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
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.900">
          <Flex>
            <HStack>
              <DrawerCloseButton size="lg" paddingTop="9" color="white" />
              <DrawerHeader fontSize="4xl" marginBottom="5" textColor="white">
                CHARTS
              </DrawerHeader>
            </HStack>
          </Flex>
          <DrawerBody>
            <Flex flexDirection="column">
              <Button
                marginBottom="3"
                fontSize="2xl"
                variant="ghost"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                <Link href="/charts/linechart">Line-Chart</Link>
              </Button>
              <Button
                marginBottom="3"
                fontSize="2xl"
                variant="ghost"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                hello
              </Button>
              <Button
                marginBottom="3"
                fontSize="2xl"
                variant="ghost"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                hello
              </Button>
              <Button
                marginBottom="3"
                fontSize="2xl"
                variant="ghost"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                hello
              </Button>
              <Button
                marginBottom="3"
                fontSize="2xl"
                variant="ghost"
                paddingTop="7"
                paddingBottom="7"
                color="white"
                _hover={{ bgColor: "#35285E" }}
                _active={{ bgColor: "#12092D" }}
              >
                hello
              </Button>
              <Button
                marginBottom="3"
                fontSize="xl"
                variant="ghost"
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
