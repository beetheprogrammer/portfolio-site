import React, { useEffect, useState } from 'react'
import { SlideShowContainer } from './projects.styles'
import Image from 'next/image';

const SlideShow = ({images} : {images: string[]}) => {
  const projectImages = images;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(()=> {
      setIndex((prev) => prev === 3 ? 0 : prev + 1)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <SlideShowContainer>
      <Image 
        src={projectImages[index]}
        alt={`Slide ${index + 1}`}
        width={800}
        height={600}
        className='SlideImage'
      />
    </SlideShowContainer>
  )
}

export default SlideShow