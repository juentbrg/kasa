import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import homeCover from '../../assets/home_cover.png'
import aboutCover from '../../assets/about_cover.png'

const StyledBanner = styled.div`
  width: 100%;
  height: 111px;
  margin-top: 10px;
  border-radius: 10px;
  position: relative;
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(0.7);
`

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  max-width: 80%;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`

const Banner = () => {
  const location = useLocation()
  const homePage = location.pathname === '/'

  return (
    <StyledBanner>
      {homePage ? (
        <StyledImage src={homeCover} alt="home-cover" />
      ) : (
        <StyledImage src={aboutCover} alt="about-cover" />
      )}
      {homePage && <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>}
    </StyledBanner>
  )
}

export default Banner
