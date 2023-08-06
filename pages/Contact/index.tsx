import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPageCountData, updatePageCountData } from "@/config/utils";
import Head from "next/head";
import React, { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        async function fetchData() {
            const data = await getPageCountData();
            return data;
        }

        fetchData().then((res) => {
            const updatedRes = { ...res, contact: res.contact + 1 }
            updatePageCountData(updatedRes)
        })
    }, [])

    return (
        <>
            <Head>
                <title>Pragya Singh</title>
                <link rel="icon" href="/favicons.png" />
                <meta name="description" content="Pragya Singh Conatct A youtuber Neon Narrative "></meta>
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
                <section id="Contact" className="max-w-contentContainer mx-auto  xl:py-32 flex flex-col gap-4 items-center justify-center">
                    <h2 className="font-titleFont text-5xl font-semibold p-5">Let's Connect</h2>
                    <p className="max-w-[600px] text-center text-textDark p-5">
                        "Hey there! Thanks for stopping by. Feel free to drop me a 'hi' or any questions you may have, and I'll get back to you in a jiffy. Looking forward to connecting with you!"
                    </p>
                    <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"><a href="mailto:singhpragya989@gmail.com">Say Hello</a></button>
                    <div className="items-center justify-between"> <Footer /></div>

                </section>
            </main>
        </>
    );
}
export default Contact