import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputRightElement, IconButton, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredProducts = sampleProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          E-Shop
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>
          Products
        </Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>
          Contact
        </Link>
        <InputGroup size="md" width="300px" mx={2}>
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              size="sm"
              icon={searchQuery ? <CloseIcon /> : <SearchIcon />}
              onClick={() => setSearchQuery("")}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
      {searchResults.length > 0 && (
        <VStack
          bg="white"
          position="absolute"
          mt={2}
          p={2}
          boxShadow="md"
          borderRadius="md"
          width="300px"
          zIndex="1000"
        >
          {searchResults.map(product => (
            <Link as={RouterLink} to={`/products/${product.id}`} key={product.id} width="100%">
              <Text>{product.name}</Text>
            </Link>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;