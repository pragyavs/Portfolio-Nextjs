import Navbar from '@/components/Navbar';
import Head from 'next/head'
import ArchiveCard from './ArchiveCard';
import Footer from '@/components/Footer';
import { blogsData } from '@/config/config';
import { getPageCountData, updatePageCountData } from '@/config/utils';
import { useEffect } from 'react';

export default function Blog() {

  useEffect(() => {
    async function fetchData() {
      const data = await getPageCountData();
      return data;
    }

    fetchData().then((res) => {
      const updatedRes = { ...res, blog: res.blog + 1 }
      updatePageCountData(updatedRes)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Pragya Singh </title>
        <link rel="icon" href="/favicons.png" />
        <meta name="description" content="Pragya Singh Blogger write content about vibes, How to add Lottiefie, Prove them Wrong "></meta>
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
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
          <div className="w-full flex flex-col items-center">
            <h2 className='text-5xl font-titleFont font-semibold'>My Blogs</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            {
              blogsData.map(blog => <ArchiveCard des={blog.des} link={blog.link} title={blog.title} />)
            }
          </div>
          <div className="mt-12 flex items-center justify-center "><button className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300' ><a href="https://pragyavs.blogspot.com/" target="_blank">Show More</a></button></div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <Footer />
          </div>
        </div>


      </main>
    </>
  );
}