import { Flex, Image, Box, Stack, Text, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import Feature from "./feature";

export default function SectionDetails() {
  return (
    <Flex
      as="section"
      justify="center"
      align="center"
      direction="column"
      w={["100%", "100%", "90%", "80%"]}
      maxWidth={1440}
      mx="auto"
      h="100%"
      my="8"
    >
      <Grid
        as="nav"
        w="100%"
        templateColumns={["repeat(2s,1fr)", "repeat(2,1fr)", "repeat(4,1fr)", "repeat(5,1fr)"]}
        gap={6}
      >
        <GridItem>
          <Feature icon="cocktail" title="Vida Noturna" />
        </GridItem>

        <GridItem>
          <Feature icon="surf" title="Praia" />
        </GridItem>

        <GridItem>
          <Feature icon="building" title="Moderno" />
        </GridItem>

        <GridItem>
          <Feature icon="museum" title="Clássico" />
        </GridItem>

        <GridItem colSpan={[2, 1, 1, 1]}>
          <Feature icon="earth" title="e mais..." />
        </GridItem>

      </Grid>
    </Flex>
  )
}