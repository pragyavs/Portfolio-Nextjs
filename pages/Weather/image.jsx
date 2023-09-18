import Image from 'next/image'
import mypic from '../../public/weather-app.png'
const MyImage = (props) => {
    return (
        <Image
            src={mypic}
            alt="Picture of the weather"
            width={150}
            height={150}
            layout="fixed"
        />
    )
}
export default MyImage