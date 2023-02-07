import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: ${colors.primary};
  display: block;
  margin-top: 26vh;
`

const StyledTitle = styled.h1`
  color: ${colors.primary};
  font-size: 96px;
  font-weight: 700;
  margin-top: 16vh;
`

const StyledParagraph = styled.p`
  color: ${colors.primary};
`

const Error = () => {
  return (
    <StyledContainer>
      <StyledTitle>404</StyledTitle>
      <StyledParagraph>
        Oups! La page que vous demandez n'existe pas
      </StyledParagraph>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </StyledContainer>
  )
}

export default Error
