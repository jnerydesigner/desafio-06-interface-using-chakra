import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Itens from './Itens';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Slider() {
  return (
    <>
      <Flex
        flexDirection="column"
        h="100%"
        w="100%"
        justify="center"
        align="center"
        my="4"
      >
        <Text as="h1" fontSize={["sm", "md", "lg", "xl"]}>
          Vamos Nessa?
        </Text>

        <Text as="h1" fontSize={["sm", "md", "lg", "xl-4"]}>
          Então Escolha seu continente
        </Text>
      </Flex>
      <Flex
        w={["100%", "100%", "90%", "80%"]}
        flexDirection="column"
        h={["220px", "300px", "350px", "450px"]}
        maxW="1240px"
        mx="auto"
        mb={["5", "10"]}>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
          }}
          style={{ width: '100%', flex: '1' }}
        >
          <SwiperSlide>
            <Itens banner="slider-africa.jpeg" continent="Africa" />
          </SwiperSlide>
          <SwiperSlide>
            <Itens banner="slider-europa.jpeg" continent="Europa" />
          </SwiperSlide>
          <SwiperSlide>
            <Itens banner="slider-oceania.jpeg" continent="Oceania" />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  )
}