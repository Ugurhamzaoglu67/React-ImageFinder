import React from 'react'
import './imagelist.css'


const ImageList  = ({ images }) => {
    

    const haveComeImages = images.map((img) => {
        console.log(img)
        return (
            <img  src={img.urls.small} alt={img.alt_description} key={img.id} />
        )
    })

    return (

        <div className="imageCss">
            {haveComeImages}

        </div>
    )

}


export default ImageList