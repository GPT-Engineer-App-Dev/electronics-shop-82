import { Box, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          About Us
        </Text>
        <Text>
          Welcome to E-Shop, your number one source for all electronic gadgets. We're dedicated to giving you the very best of electronics, with a focus on quality, customer service, and uniqueness.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;