import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head'
import SectionTitle from './SecctionTitle';
import AnimationPages from './AnimationPages';
import styles from '@/components/LeftSidebarAnimation.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Pragya Singh</title>
        <link rel="icon" href="/favicons.png" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className=""> <AnimationPages /></div>
        <section className="max-w-containerSmall mx-auto py-08 lgl:py-30 flex flex-col gap-8">

          <SectionTitle title="About Me" />
          <div className='flex flex-col lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 p-5'>
            <p>Hello! I'm Pragay Singh, a versatile backend developer specializing in Node.js and AWS, and a passionate content creator on YouTube. I'm delighted to have you here, and I'd love to share a bit more about myself and what drives my passion for technology.
            </p> <h2 className="font-titleFont text-2xl font-semibold flex items-center">My Journey as a Backend Developer</h2><p>Since the beginning of my career, I've been captivated by the world of backend development. The ability to build powerful and efficient server-side applications that drive the functionality of websites and apps has always fascinated me. With a strong foundation in Node.js and AWS, I've tackled complex challenges and built reliable solutions for a variety of projects.
            </p><h2 className="font-titleFont text-2xl font-semibold flex items-center">My Love for Content Creation</h2><p>Beyond coding, I've found another outlet for my passion: content creation on YouTube. Through my channel, I share insights into the world of technology, coding tutorials, and tips for fellow developers. It's a platform where I can engage with an incredible community, learn from others, and give back to the tech ecosystem that has given me so much.</p>
            <h2 className="font-titleFont text-2xl font-semibold flex items-center">Why Backend Developer</h2><p>Working in backend development has allowed me to be a crucial part of the technological backbone of countless applications. The joy of seeing an idea come to life and function seamlessly, thanks to the code I've written, is immensely rewarding. I thrive on creating scalable and efficient systems that can handle real-world challenges.</p>
            <div></div>
          </div>
          <Footer />
        </section>


      </main>
    </>
  );
}