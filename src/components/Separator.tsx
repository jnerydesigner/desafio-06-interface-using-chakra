import { Box } from '@chakra-ui/react';

interface SeparatorProps {
  color: string;
  strokeWidth: string;
}

export default function Separator({ color, strokeWidth }: SeparatorProps) {
  return (
    <Box w={["80%", "40%", "10%"]} mx="auto" h={strokeWidth} bg={color} my={["9", "20"]} />
  )
}