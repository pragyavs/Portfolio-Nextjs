// src/components/AnimationPage.jsx

import React, { Component } from 'react';
import Lottie from 'react-lottie';
import {motion} from "framer-motion"
import animationData from '../public/animations/data.json'
class AnimationPage extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
        }
        return (
            <motion.div                                                         
            initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity:1}}
            transition={{duration: 0.5,delay: 0.4}}>
               <Lottie
                options={defaultOptions}
                height={500}
                width={700}
               />
            </motion.div>
        )
    };  
}
export default AnimationPage;