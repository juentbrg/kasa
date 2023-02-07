import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'
import logo from '../../assets/logo.svg'

const StyledContainer = styled.div`
  width: 100%;
  height: 47px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledLogo = styled.img`
  height: 43px;
  display: flex;
  align-self: center;
`

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: 50O;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

const Header = () => {
  return (
    <StyledContainer>
      <div>
        <StyledLogo src={logo} alt="logo-kasa" />
      </div>
      <div>
        <StyledLink to="/">ACCUEIL</StyledLink>
        <StyledLink to="/about">À PROPOS</StyledLink>
      </div>
    </StyledContainer>
  )
}

export default Header
