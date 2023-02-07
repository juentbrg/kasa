import styled from 'styled-components'
import Banner from '../../components/Banner'
import accommodationList from '../../datas/accommodationList'
import Accommodation from '../../components/Accommodation'

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 0;
`

const StyledCard = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Home = () => {
  return (
    <div className="App">
      <Banner />
      <StyledContainer>
        {accommodationList.map(({ id, cover, title }) => (
          <StyledCard key={id}>
            <Accommodation cover={cover} title={title} />
          </StyledCard>
        ))}
      </StyledContainer>
    </div>
  )
}

export default Home
