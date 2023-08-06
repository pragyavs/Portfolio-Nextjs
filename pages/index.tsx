import Navbar from '@/components/Navbar';
import Head from 'next/head'
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import { motion } from "framer-motion"
import Banner from '@/components/Banner';
import { getPageCountData, updatePageCountData } from '@/config/utils';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    async function fetchData() {
      const data = await getPageCountData();
      return data;
    }

    fetchData().then((res) => {
      const updatedRes = { ...res, homePage: res.homePage + 1 }
      updatePageCountData(updatedRes)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Pragya Singh</title>
        <link rel="icon" href="/favicons.png" />
        <meta name="description" content="Pragya Singh A passionate and experienced backend developer with expertise in Node.js and AWS. A youtuber Neon Narrative "></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:title" content="Pragya Singh" key="ogtitle" />
        <meta property="og:description" content="A Backend Developer and a youtuber" key="ogdesc" />
        <meta name="twitter:card" content="Pragya Singh A Backend Dev"></meta>
        <meta name="whatsapp:card" content="Pragya Singh A Backend Dev"></meta>
        <meta name="instagram:card" content="Pragya Singh A Backend Dev"></meta>
      </Head>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between"><Banner /></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }} className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>
        <div className="  p-1">

        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }} className="hidde xl:inline-flex w-32 h-full fixed right-0 bottom-0"><RightSide /></motion.div>
      </main>
    </>
  );
}
