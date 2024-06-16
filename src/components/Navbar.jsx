import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">Financial Times</Text>
        <Spacer />
        <Link as={RouterLink} to="/" px={2} color="white">Home</Link>
        <Link as={RouterLink} to="/about" px={2} color="white">About</Link>
        <Link as={RouterLink} to="/contact" px={2} color="white">Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;