import { Divider, Center } from '@chakra-ui/react';
import Head from 'next/head'
import Bio from '../components/Bio';
import Cities100 from '../components/Cities100';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopBannerDetails from '../components/TopBannerDetails';


export default function Continents() {
  return (
    <>
      <Header />
      <TopBannerDetails />
      <Bio />
      <Cities100 />
      <Footer />

    </>
  )
}
