import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import styled from 'styled-components'
import Footer from '../../components/Footer'

const Main = styled.main`
  min-height: calc(100vh - 269.5px);
  @media all and (min-width: 1100px) {
    padding-bottom: 100px;
  }
`

const StyledContainer = styled.div`
  margin: 19px 0;
  @media all and (min-width: 1100px) {
    margin: 31px 0;
    padding: 0 100px;
  }
`

const StyledCollapseContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const About = () => {
  const information = [
    {
      id: '1',
      title: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      id: '2',
      title: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      id: '3',
      title: 'Service',
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: '4',
      title: 'Sécurité',
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return (
    <div>
      <Main>
        <Banner location={'aboutPage'} />
        <StyledContainer>
          {information.map(({ id, title, description }) => (
            <StyledCollapseContainer key={id}>
              <Collapse title={title} description={description} />
            </StyledCollapseContainer>
          ))}
        </StyledContainer>
      </Main>
      <Footer />
    </div>
  )
}

export default About
