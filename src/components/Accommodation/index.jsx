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
  top: 188px;
  left: 20px;
`

const Accommodation = ({ id, cover, title }) => {
  return (
    <StyledContainer to="*">
      <StyledImage src={cover} alt={`${title} cover`} />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  )
}

export default Accommodation
