import styled from 'styled-components'
import logo from '../../assets/logo_footer.png'

const StyledFooter = styled.footer`
  width: 100%;
  margin-left: -20px;
  padding: 62px 20px;
  background-color: black;
  text-align: center;
`

const Logo = styled.img`
  height: 40px;
  width: 122px;
`

const Paragraph = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Logo src={logo} alt="logo_footer" />
      <Paragraph>© 2020 Kasa. All rights reserved</Paragraph>
    </StyledFooter>
  )
}

export default Footer
