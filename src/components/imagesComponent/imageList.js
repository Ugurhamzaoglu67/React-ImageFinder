import React from 'react'
import './imagelist.css'
import Image from './imageClassB'

const ImageList  = ({ images }) => {
    

    const haveComeImages = images.map((img) => {
       
        return (
           <Image img={img}  key={img.id}/>
        )
    })

    return (

        <div className="imageCss-container">
            {haveComeImages}

        </div>
    )

}


export default ImageList