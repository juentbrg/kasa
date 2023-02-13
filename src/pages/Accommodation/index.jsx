import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import accommodationList from '../../datas/accommodationList'
import colors from '../../utils/colors'
import styled from 'styled-components'

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

const Accommodation = () => {
  let accommodationId = useParams().id
  const accommodation = accommodationList.find(
    ({ id }) => id === accommodationId
  )
  const slides = accommodation.pictures.map((picture) => ({ url: picture }))

  return (
    <main>
      <Slideshow imageUrl={slides} />
      <Title>{accommodation.title}</Title>
      <Location>{accommodation.location}</Location>
      <TagsContainer>
        {accommodation.tags.map((tag) => (
          <Tags key={tag}>{tag}</Tags>
        ))}
      </TagsContainer>
    </main>
  )
}

export default Accommodation
