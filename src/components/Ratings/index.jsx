import redStar from '../../assets/red_star.png'
import greyStar from '../../assets/grey_star.png'
import styled from 'styled-components'

const Star = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  @media all and (min-width: 1100px) {
    height: 30px;
    width: 30px;
    margin-right: 0;
    margin-left: 10px;
    margin-top: 24px;
  }
`

const Ratings = ({ rating }) => {
  const range = [1, 2, 3, 4, 5]
  return (
    <div>
      {range.map((rangeElem) => (
        <Star
          key={rangeElem}
          src={rangeElem <= rating ? redStar : greyStar}
          alt={rangeElem <= rating ? 'red star' : 'gray star'}
        />
      ))}
    </div>
  )
}

export default Ratings
