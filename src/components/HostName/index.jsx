import colors from '../../utils/colors'
import styled from 'styled-components'

const UserName = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 12px;
  margin-right: 10.5px;
  white-space: pre-wrap;
  line-height: 142.6%;
  @media all and (min-width: 1100px) {
    font-size: 18px;
  }
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

export default HostName
