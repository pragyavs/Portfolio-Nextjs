import Navbar from '@/components/Navbar';
import Head from 'next/head'
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import { motion } from "framer-motion"
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pragya Singh</title>
        <link rel="icon" href="/favicons.png" />
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
