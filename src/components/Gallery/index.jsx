import styled from 'styled-components'
import colors from '../../utils/colors'
import { Link } from 'react-router-dom'

const StyledContainer = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 255px;
  border-radius: 10px;
  background: ${colors.gradiantPrimary};
  position: relative;
  overflow: hidden;
  @media all and (min-width: 1100px) {
    height: 340px;
    width: 340px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(0.8);
  transition: all 0.35s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`

const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  position: absolute;
  bottom: 20px;
  left: 20px;
`

const Gallery = ({ id, cover, title }) => {
  return (
    <StyledContainer to={id ? `/accommodation/${id}` : '/'}>
      <StyledImage src={cover} alt={`${title} cover`} />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  )
}

export default Gallery
