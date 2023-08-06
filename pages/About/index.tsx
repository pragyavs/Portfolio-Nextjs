import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head'
import SectionTitle from './SecctionTitle';
import AnimationPages from './AnimationPages';
import { getPageCountData, updatePageCountData } from '@/config/utils';
import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    async function fetchData() {
      const data = await getPageCountData();
      return data;
    }

    fetchData().then((res) => {
      const updatedRes = { ...res, about: res.about + 1 }
      updatePageCountData(updatedRes)
    })
  }, [])


  return (
    <>
      <Head>
        <title>Pragya Singh - About</title>
        <link rel="icon" href="/favicons.png" />
        <meta name="description" content="Pragya Singh A passionate and experienced backend developer with expertise in Node.js and AWS. A youtuber Neon Narrative "></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:title" content="Pragya Singh" key="ogtitle" />
        <meta property="og:description" content="A Backend Developer and a youtuber" key="ogdesc" />
        <meta name="twitter:card" content="Pragya Singh A Backend Dev"></meta>
        <meta name="whatsapp:card" content="Pragya Singh A Backend Dev"></meta>
        <meta name="instagram:card" content="Pragya Singh A Backend Dev"></meta>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className=""> <AnimationPages /></div>
        <section className="max-w-containerSmall mx-auto py-08 lgl:py-30 flex flex-col gap-8">

          <SectionTitle title="About Me" />
          <div className='flex flex-col lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 p-5'>
            <p>Hello! I'm Pragya Singh, a  backend developer specializing in Node.js and AWS, and a passionate content creator on YouTube. I'm delighted to have you here, and I'd love to share a bit more about myself and what drives my passion for technology.
            </p> <h2 className="font-titleFont text-2xl font-semibold flex items-center">My Journey as a Backend Developer</h2><p>Since the beginning of my career, I've been captivated by the world of backend development. The ability to build powerful and efficient server-side applications that drive the functionality of websites and apps has always fascinated me. With a strong foundation in Node.js and AWS, I've tackled complex challenges and built reliable solutions for a variety of projects.
            </p><h2 className="font-titleFont text-2xl font-semibold flex items-center">My Love for Content Creation</h2><p>Beyond coding, I've found another outlet for my passion: content creation on YouTube. Through my channel, I share insights into the world of technology, and how i manage my life. It's a platform where I can engage with an incredible community, learn from others, and give back to the tech ecosystem that has given me so much.</p>
            <h2 className="font-titleFont text-2xl font-semibold flex items-center">Why Backend Developer</h2><p>Working in backend development has allowed me to be a crucial part of the technological backbone of countless applications. The joy of seeing an idea come to life and function seamlessly, thanks to the code I've written, is immensely rewarding. I thrive on creating scalable and efficient systems that can handle real-world challenges.</p>
            <div></div>
          </div>
          <Footer />
        </section>


      </main>
    </>
  );
}