import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Slideshow from '../../components/Slideshow'
import Ratings from '../../components/Ratings'
import Collapse from '../../components/Collapse'
import accommodationList from '../../datas/accommodationList'
import colors from '../../utils/colors'
import styled from 'styled-components'
import Footer from '../../components/Footer'

const Main = styled.main`
  min-height: calc(100vh - 274.5px);
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
  margin-top: 15px;
`

const Location = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
`
const TagsContainer = styled.div`
  margin-top: 10px;
  display: flex;
`

const Tags = styled.div`
  background-color: ${colors.primary};
  border-radius: 5px;
  width: 84px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
  font-size: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

const StarAndUser = styled.div`
  margin: 16px 0;
  height: 33px;
  align-items: center;
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
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

const UserName = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 12px;
  margin-right: 10.5px;
  white-space: pre-wrap;
`

const HostName = ({ name }) => {
  const [firstName, lastName] = name.split(' ')
  return (
    <>
      <UserName>{firstName}</UserName>
      <UserName>{lastName}</UserName>
    </>
  )
}

const UserPic = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`

const CollapseContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const EquipmentsListContainer = styled.ul`
  line-height: 142.6%;
`

const EquipmentsList = styled.li`
  list-style-type: none;
`

const Equipments = ({ equipments }) => {
  return (
    <EquipmentsListContainer>
      {equipments.map((e) => (
        <EquipmentsList key={e}>{e}</EquipmentsList>
      ))}
    </EquipmentsListContainer>
  )
}

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
            <TagsContainer>
              {accommodation.tags.map((tag) => (
                <Tags key={tag}>{tag}</Tags>
              ))}
            </TagsContainer>
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
                description={
                  <Equipments equipments={accommodation.equipments} />
                }
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
