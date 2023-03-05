import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Slideshow from '../../components/Slideshow'
import Ratings from '../../components/Ratings'
import Collapse from '../../components/Collapse'
import HostName from '../../components/HostName'
import Tags from '../../components/Tags'
import Equipments from '../../components/CollapseList'
import accommodationList from '../../datas/accommodationList'
import colors from '../../utils/colors'
import styled from 'styled-components'
import Footer from '../../components/Footer'

const Main = styled.main`
  min-height: calc(100vh - 274.5px);
  @media all and (min-width: 1100px) {
    padding-bottom: 100px;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;equipments
`

const Title = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
  margin-top: 15px;
  @media all and (min-width: 1100px) {
    font-size: 36px;
    margin-top: 30px;
  }
`

const Location = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
  @media all and (min-width: 1100px) {
    font-size: 18px;
  }
`

const StarAndUser = styled.div`
  margin: 16px 0;
  height: 33px;
  align-items: center;
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
  @media all and (min-width: 1100px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`

const User = styled.div`
  display: flex;
  align-items: center;
`

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`

const UserPic = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  @media all and (min-width: 1100px) {
    width: 64px;
    height: 64px;
  }
`

const CollapseContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Accommodation = () => {
  let accommodationId = useParams().id
  const accommodation = accommodationList.find(
    ({ id }) => id === accommodationId
  )

  const navigate = useNavigate()
  useEffect(() => {
    if (!accommodation) {
      navigate('/error')
    }
  }, [accommodation, navigate])

  try {
    const slides = accommodation.pictures.map((picture) => ({ url: picture }))

    return (
      <div>
        <Main>
          <Slideshow imageUrl={slides} />
          <Section>
            <Title>{accommodation.title}</Title>
            <Location>{accommodation.location}</Location>
            <Tags name={accommodation.tags} />
            <StarAndUser>
              <Ratings rating={accommodation.rating} />
              <User>
                <UserNameContainer>
                  <HostName name={accommodation.host.name} />
                </UserNameContainer>
                <UserPic
                  src={accommodation.host.picture}
                  alt={accommodation.host.name}
                />
              </User>
            </StarAndUser>
            <CollapseContainer>
              <Collapse
                title="Description"
                description={accommodation.description}
              />
              <Collapse
                title="Équipements"
                description={<Equipments list={accommodation.equipments} />}
              />
            </CollapseContainer>
          </Section>
        </Main>
        <Footer />
      </div>
    )
  } catch {
    console.log('Accomodation not found')
  }
}

export default Accommodation
