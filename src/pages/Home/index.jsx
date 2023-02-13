import styled from 'styled-components'
import Banner from '../../components/Banner'
import accommodationList from '../../datas/accommodationList'
import Gallery from '../../components/Gallery'

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
            <Gallery id={id} cover={cover} title={title} />
          </StyledCard>
        ))}
      </StyledContainer>
    </div>
  )
}

export default Home
