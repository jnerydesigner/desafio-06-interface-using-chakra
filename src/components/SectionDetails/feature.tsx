import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { FiArrowRight } from 'react-icons/fi';

interface FeatureProps {
  icon: string;
  title: string;
}

export default function Feature({ icon, title }: FeatureProps) {
  const isMobileView = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex
      as="section"
      justify={["center", "center", "center"]}
      align={["center", "center", "center"]}
      flexDirection={["row", "column", "column"]}
      w="100%"
      h="100%"
      my="2"

    >
      {isMobileView ?
        <Image src={`/images/icons/${icon}.svg`} alt={title} /> :
        <FiArrowRight width="10" height="10" color="yellow" />}

      <Text as="h4" fontSize={16} size="xl" mt="10" >{title}</Text>
    </Flex>
  )
}