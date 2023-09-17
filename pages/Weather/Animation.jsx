import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData1 from '../../public/animations/data3.json'

class Animation extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData1,
            renderer: 'svg'
        }
        return (
            <div>
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}

                />
            </div>
        )
    };
}

export default Animation