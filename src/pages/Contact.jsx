import { Box, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Contact Us
        </Text>
        <Text>
          If you have any questions or comments, please don't hesitate to contact us at support@eshop.com.
        </Text>
      </VStack>
    </Box>
  );
};

export default Contact;