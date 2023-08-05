import Navbar from '@/components/Navbar';
import Head from 'next/head'
import SectionTitle from '../About/SecctionTitle';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx"
import Footer from '@/components/Footer';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Pragya Singh</title>
        <link rel="icon" href="/favicons.png" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <section className="max-w-conatiner mx-auto lgl:px-08 py-08">
          <div className="flex flex-col gap-6 items-center justify-center">
            <SectionTitle title="Some Things I have Built"></SectionTitle></div>
          <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10'>

              <h3 className='text-2xl font-bold p-5'>CALCULATOR</h3>
              <p className='bg-[#112240] text-sm md:text-base p-5 md:p-6 rounded-md'>A simple calculator that can perform basic operations such as addition, subtraction, multiplication, and division.</p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVACRIPT</li>
              </ul>
              <div className="text-2xl flex gap-4"><a className="hover:text-textGreen duration-300" href="https://github.com/pragyavs" target="_blank"><TbBrandGithub /></a>
                <a className="hover:text-textGreen duration-300" href="https://pragyasingh.in/calci" target="_blank"><RxOpenInNewWindow /></a>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-5">
              <h3 className='text-2xl font-bold'>TODO</h3>
              <p className='bg-[#112240] text-sm md:text-base p-5 md:p-6 rounded-md'>A straightforward ToDo list has been created, enabling you to perform Create, Read, Edit, and Delete (CRED) operations on tasks.</p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVACRIPT</li>
              </ul>
              <div className="text-2xl flex gap-4"><a className="hover:text-textGreen duration-300" href="https://github.com/pragyavs" target="_blank"><TbBrandGithub /></a>
                <a className="hover:text-textGreen duration-300" href="https://pragyasingh.in/todo/index.html" target="_blank"><RxOpenInNewWindow /></a>
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10'>

              <h3 className='text-2xl font-bold p-5'>TIC TAC TOE</h3>
              <p className='bg-[#112240] text-sm md:text-base p-5 md:p-6 rounded-md'>A Tic Tac Toe game has been created, where players use 'X' and 'O' as markers.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Python</li>
              </ul>
              <div className="text-2xl flex gap-4"><a className="hover:text-textGreen duration-300" href="https://github.com/pragyavs" target="_blank"><TbBrandGithub /></a>
              </div>
            </div>
            <div className='flex flex-col gap-6 p-5'>
              <h3 className='text-2xl font-bold'>PRICE PREDICTION</h3>
              <p className='bg-[#112240] text-sm md:text-base p-5 md:p-6 rounded-md'>A Machine Learning project has been developed to predict therices of old bikes  pand cars based on various features,
                By inputting the details, tit will provide <br></br>approximate price estimation.</p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>Flask</li>
              </ul>
              <div className="text-2xl flex gap-4"><a className="hover:text-textGreen duration-300" href="https://github.com/pragyavs" target="_blank"><TbBrandGithub /></a>
                <a className="hover:text-textGreen duration-300" href="https://vehiclepredictions.herokuapp.com/" target="_blank"><RxOpenInNewWindow /></a>
              </div>
            </div>
            <div className="items-center justify-between"> <Footer /></div>
          </div>

        </section>
      </main>
    </>
  );
}