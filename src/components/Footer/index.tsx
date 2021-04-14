import { Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex
      width={[
        "100%", // 0-30em
        "100%", // 30em-48em
        "100%", // 48em-62em
        "100%", // 62em+
      ]}
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
      bg="gray.100"
    >
      <Text as="h1">
        Produzido por Jander Nery
      </Text>
    </Flex>
  )
}