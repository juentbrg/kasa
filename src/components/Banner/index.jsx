import styled from 'styled-components'
import homeCover from '../../assets/home_cover.png'
import aboutCover from '../../assets/about_cover.png'

const StyledBanner = styled.div`
  width: 100%;
  height: 111px;
  margin-top: 20px;
  border-radius: 10px;
  position: relative;
  &.About {
    height: 223px;
  }
  @media all and (min-width: 1100px) {
    height: 223px;
    text-align: center;
    margin-top: 60px;
  }
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(0.7);
  &.About {
    height: 223px;
  }
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
  @media all and (min-width: 1100px) {
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-size: 48px;
    max-width: 100%;
  }
`

const Banner = ({ location }) => {
  return (
    <StyledBanner className={location === 'aboutPage' ? 'About' : ''}>
      <StyledImage
        className={location === 'aboutPage' ? 'About' : ''}
        src={location === 'homePage' ? homeCover : aboutCover}
        alt={location === 'homePage' ? 'home-cover' : 'about-cover'}
      />
      {location === 'homePage' && (
        <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>
      )}
    </StyledBanner>
  )
}

export default Banner
