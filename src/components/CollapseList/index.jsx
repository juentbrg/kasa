import styled from 'styled-components'

const CollapseListContainer = styled.ul`
  line-height: 142.6%;
`

const CollapseLi = styled.li`
  list-style-type: none;
`

const CollapseList = ({ list }) => {
  return (
    <CollapseListContainer>
      {list.map((e) => (
        <CollapseLi key={e}>{e}</CollapseLi>
      ))}
    </CollapseListContainer>
  )
}

export default CollapseList
