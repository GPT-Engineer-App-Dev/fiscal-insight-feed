import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Financial Times</Heading>
        <Text fontSize="lg">Financial Times is your go-to source for the latest financial news and insights.</Text>
      </VStack>
    </Container>
  );
};

export default About;