import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to E-Shop</Text>
        <Text>Your one-stop shop for all electronic gadgets.</Text>
      </VStack>
    </Container>
  );
};

export default Index;