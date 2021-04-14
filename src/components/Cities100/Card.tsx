import { Box, Image, Heading, Avatar } from '@chakra-ui/react'


interface CitiesProps {
  country: string;
  city: string;
  flag: string;
  banner: string;
}
export default function Card({ city, country, flag, banner }: CitiesProps) {
  return (
    <Box
      border="1px"
      borderColor="#FFBA08"
      borderRadius="4"
      zIndex="1"
    >
      <Image src={`/images/cities/${banner}`} zIndex="2" h="150px" w="100%" />
      <Box d="flex" justifyContent="space-between" alignItems="center" p="4">
        <Box my="4" d="flex" flex="1" flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Heading fontWeight="600" size="lg" lineHeight="25px">{city}</Heading>
          <Heading fontWeight="400" size="sm" lineHeight="30px">{country}</Heading>
        </Box>
        <Box>
          <Avatar size="sm" name="Dan Abrahmov" src={`/images/bandeiras/${flag}`} />
        </Box>
      </Box>
    </Box>
  )
}