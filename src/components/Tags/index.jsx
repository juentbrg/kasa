import colors from '../../utils/colors'
import styled from 'styled-components'

const TagsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  @media all and (min-width: 1100px) {
    margin-top: 20px;
  }
`

const Tag = styled.div`
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
  @media all and (min-width: 1100px) {
    width: 115px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
  }
`

const Tags = ({ name }) => {
  return (
    <TagsContainer>
      {name.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsContainer>
  )
}

export default Tags
