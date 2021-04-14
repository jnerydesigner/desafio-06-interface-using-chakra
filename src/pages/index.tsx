import { Divider, Center } from '@chakra-ui/react';
import Head from 'next/head'
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionDetails from '../components/SectionDetails';
import Separator from '../components/Separator';
import TopBanner from '../components/TopBanner';



export default function Home() {
  return (
    <>
      <Header />
      <TopBanner />
      <SectionDetails />
      <Separator strokeWidth="2px" color="#FFBA08" />
      <Carrousel />
      <Footer />

    </>
  )
}
