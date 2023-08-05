import React, {Component} from 'react';
import { motion } from "framer-motion"
import Lottie from 'react-lottie';

import animationData1 from '../../public/animations/data1.json'

class AnimationPages extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData1,
            renderer: 'svg'
        }
        return (
            <motion.div                                                          initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity:1}}
            transition={{duration: 0.5,delay: 0.4}}>
               <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                
               />
            </motion.div>
        )
    };  
}

export default AnimationPages