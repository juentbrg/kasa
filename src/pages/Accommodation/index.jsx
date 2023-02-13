import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import accommodationList from '../../datas/accommodationList'
import colors from '../../utils/colors'
import styled from 'styled-components'

const Accommodation = () => {
  let accommodationId = useParams().id
  const accommodation = accommodationList.find(
    ({ id }) => id === accommodationId
  )
  const slides = accommodation.pictures.map((picture) => ({ url: picture }))

  return (
    <div>
      <Slideshow imageUrl={slides} />
    </div>
  )
}

export default Accommodation
