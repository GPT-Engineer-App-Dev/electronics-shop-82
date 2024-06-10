import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputRightElement, IconButton, VStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query.length > 0) {
      const results = sampleProducts.filter(product => product.name.toLowerCase().includes(query));
      setSearchResults(results);
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
        <InputGroup size="md" width="300px" mx={2}>
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearch}
          />
          <InputRightElement width="4.5rem">
            <IconButton h="1.75rem" size="sm" icon={<SearchIcon />} />
          </InputRightElement>
        </InputGroup>
        {searchQuery && (
          <VStack
            position="absolute"
            mt={2}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            width="300px"
            zIndex="1000"
          >
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <Link as={RouterLink} to={`/products/${product.id}`} key={product.id} p={2} width="100%">
                  {product.name}
                </Link>
              ))
            ) : (
              <Text p={2}>No results found</Text>
            )}
          </VStack>
        )}
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
      </Flex>
    </Box>
  );
};

export default Navbar;