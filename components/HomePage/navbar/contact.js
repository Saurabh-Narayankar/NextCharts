import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const comment = event.target.comment.value;

    const feedbackObj = { name, email, comment };

    fetch("/api", {
      method: "POST",
      body: JSON.stringify(feedbackObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Button
        onClick={onOpen}
        size={["xs", "sm", "md", "lg"]}
        variant="ghost"
        color="whiteAlpha.900"
        _hover={{ bg: "#ebedf0", color: "purple.900" }}
        _active={{
          bg: "whiteAlpha.600",
        }}
      >
        Contact
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={["md", "lg"]}>
        <ModalOverlay />
        <form onSubmit={submitHandler}>
          <ModalContent textAlign="left" bgColor="purple.800">
            <Box paddingBottom="1">
              <ModalHeader color="white" fontSize="3xl" marginBottom='25px'>
                Contact
              </ModalHeader>
              <ModalCloseButton
                color="white"
                paddingTop="5"
                paddingRight="3"
                size="2"
              />
            </Box>
            <ModalBody>
              <FormControl alignContent="center">
                <Flex flexDirection="column" gap="2">
                  <FormLabel htmlFor="name" color="white" fontSize="20">
                    <Flex flexDirection="row" alignItems="center" gap="2">
                      Name
                      <ArrowForwardIcon />
                    </Flex>
                  </FormLabel>
                  <Input
                    id="name"
                    type="text"
                    color="white"
                    bgColor="purple.900"
                    marginBottom="5"
                    size="lg"
                    fontSize="xl"
                    placeholder="Enter your name"
                  />
                  <FormLabel htmlFor="email" color="white" fontSize="20">
                    <Flex flexDirection="row" alignItems="center" gap="2">
                      Email
                      <ArrowForwardIcon />
                    </Flex>
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    color="white"
                    bgColor="purple.900"
                    marginBottom="5"
                    size="lg"
                    fontSize="xl"
                    placeholder="Enter your email"
                  />
                  <FormLabel htmlFor="comment" color="white" fontSize="20">
                    <Flex flexDirection="row" alignItems="center" gap="2">
                      Comment
                      <ArrowForwardIcon />
                    </Flex>
                  </FormLabel>
                  <Textarea
                    id="comment"
                    type="text"
                    color="white"
                    bgColor="purple.900"
                    marginBottom="5"
                    size="lg"
                    fontSize="xl"
                    placeholder="comment"
                  />
                </Flex>
              </FormControl>
            </ModalBody>
            <ModalFooter paddingTop="10">
              <Button
                type="submit"
                colorScheme="purple"
                size="lg"
                paddingRight="10"
                paddingLeft="10"
                marginBottom="5"
                onClick={onClose}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default ContactModal;
