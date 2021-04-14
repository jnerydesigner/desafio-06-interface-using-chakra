import { Flex, Text, Heading } from "@chakra-ui/react";

export default function TopBannerDetails() {
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
      h={["50px", "400px"]}
      align="center"
      justify="center"
      bg="gray.100"
      bgImage={`url('/images/slider-europa.jpeg')`}
      bgPosition="cover"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading
        w="100%"
        h="400px"
        d="flex"
        justifyContent="flex-start"
        alignItems="flex-end"
        pb="20"
        pl="20"
        bgGradient="linear(to-r, #FFBA08,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Europa
      </Heading>

    </Flex>
  )
}