import React from 'react'
import Image from 'next/image'

const ImgHandler = () => {
    return (
        <>
            <div className="image-container">                
                <Image className="img-container-mati" src="/mati.png" width="320" height="240" />
                <Image className="img-container-sole" src="/sole.png" width="320" height="240" />
                <Image className="img-container-francia" src="/francia.png" width="320" height="240" />
                <Image className="img-container-yoe" src="/yoe.png" width="320" height="240" />
                <Image className="img-container-pol" src="/pol.png" width="320" height="240" />
                <Image className="img-container-lulu" src="/lulu.png" width="320" height="240" />
               
            </div>
        </>

    )
}

export default ImgHandler