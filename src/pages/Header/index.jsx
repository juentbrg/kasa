import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import logo from '../../assets/logo.svg'

const StyledContainer = styled.header`
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
  font-weight: 500;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &.activeLink {
    text-decoration: underline;
  }
`

const Header = () => {
  const location = useLocation()
  const [activePage, setActivePage] = useState(location.pathname)

  const handleLinkClick = (event) => {
    setActivePage(event.currentTarget.getAttribute('to'))
  }

  return (
    <StyledContainer>
      <div>
        <StyledLogo src={logo} alt="logo-kasa" />
      </div>
      <nav>
        <StyledLink
          to="/"
          className={location.pathname === '/' ? 'activeLink' : ''}
          onClick={handleLinkClick}
        >
          ACCUEIL
        </StyledLink>
        <StyledLink
          to="/about"
          className={location.pathname === '/about' ? 'activeLink' : ''}
          onClick={handleLinkClick}
        >
          À PROPOS
        </StyledLink>
      </nav>
    </StyledContainer>
  )
}

export default Header
