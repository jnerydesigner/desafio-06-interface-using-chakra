import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';

interface ItensProps {
  banner: string;
  continent: string;
}


export default function Itens({ banner, continent }: ItensProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('/images/${banner}')`}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={`/continent/europe`}>
        <a>
          <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">{continent}</Heading>
          <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Continente Mais velho</Text>
        </a>
      </Link>
    </Flex>
  )
}