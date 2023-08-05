import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
const Contact = () => {
    return (
        <>
            <Head>
                <title>Pragya Singh</title>
                <link rel="icon" href="/favicons.png" />
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