import { Flex, Grid, GridItem, Text, Box } from "@chakra-ui/react";

export default function Bio() {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap="6"
        w={["100%", "100%", "90%", "80%"]}
        h="300px"
        mx="auto"
        my="10"
      >
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          p="6"
        >
          <Text
            as="p"
            textAlign="justify"
            fontWeight="400"
            size="24px"
            lineHeight="36px"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia,
            a Europa geralmente divide-se da Ásia a leste pela
            divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
            o Cáucaso, e o mar Negro a sudeste

         </Text>
        </Box>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          flexDirection="row"
        >
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            flexDirection="column"
          >
            <Text color="#FFBA08" fontSize="4xl" fontWeight="600">50</Text>
            <Text>países</Text>
          </Box>
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            flexDirection="column"
          >
            <Text color="#FFBA08" fontSize="4xl" fontWeight="600">60</Text>
            <Text>línguas</Text>
          </Box>

          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            flexDirection="column"
          >
            <Text color="#FFBA08" fontSize="4xl" fontWeight="600">27</Text>
            <Text>cidades +100</Text>
          </Box>

        </Box>

      </Grid>

    </>
  )
}