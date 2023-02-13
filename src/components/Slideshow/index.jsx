import styled from 'styled-components'
import { useState } from 'react'
import arrowLeft from '../../assets/chevron_carousel_left.png'
import arrowRight from '../../assets/chevron_carousel_right.png'

const Container = styled.div`
  flex: 1;
  height: 225px;
  border-radius: 10px;
  position: relative;
  margin-top: 25px;
`

const Slides = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const ArrowLeft = styled.img`
  height: 20px;
  width: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  cursor: pointer;
`
const ArrowRight = styled.img`
  height: 20px;
  width: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  cursor: pointer;
`

const Bullets = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
`

const Bullet = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${({ active }) => (active ? '#ffffff' : '#F2F2F2')};
  margin: 0 10px;
  cursor: pointer;
`

const Slideshow = ({ imageUrl }) => {
  let [currentIndex, setCurrentIndex] = useState(0)

  const goLeft = () => {
    setCurrentIndex(currentIndex === 0 ? imageUrl.length - 1 : currentIndex - 1)
  }

  const goRight = () => {
    setCurrentIndex(currentIndex === imageUrl.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <Container>
      <Slides
        style={{ backgroundImage: `url(${imageUrl[currentIndex].url})` }}
      ></Slides>
      <ArrowLeft src={arrowLeft} onClick={goLeft}></ArrowLeft>
      <ArrowRight src={arrowRight} onClick={goRight}></ArrowRight>
      <Bullets>
        {imageUrl.map((image, index) => (
          <Bullet
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Bullets>
    </Container>
  )
}

export default Slideshow
