import { Flex, Grid, GridItem, Text, Box, Image, Avatar, Heading } from "@chakra-ui/react";
import Card from "./Card";


export default function Cities100() {
  return (
    <Grid
      justify="center"
      align="center"
      mx="auto"
      w={["100%", "100%", "90%", "80%"]}
      templateColumns="repeat(4, 1fr)"
      gap={6}
      my="10"
    >
      <Card banner="austria.jpg" city="Viena" country="Austria" flag="austria.webp" />
      <Card banner="reino-unido.jpg" city="Londres" country="Reino Unido" flag="gb.webp" />
      <Card banner="portugal.jpg" city="Lisboa" country="Portugal" flag="portugal.webp" />
      <Card banner="franca.jpg" city="Paris" country="França" flag="franca.webp" />
      <Card banner="italia.jpg" city="Roma" country="Itália" flag="italia.webp" />

    </Grid>
  )
}