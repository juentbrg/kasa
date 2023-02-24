import styled from 'styled-components'
import Banner from '../../components/Banner'
import accommodationList from '../../datas/accommodationList'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'

const Main = styled.main`
  min-height: calc(100vh - 269.5px);
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 0;
  @media all and (min-width: 1100px) {
    background: #f7f7f7;
    border-radius: 25px;
    padding: 56px 50px 43px 50px;
    margin-top: 43px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px 60px;
    justify-content: center;
    margin-bottom: 60px;
  }
`

const StyledCard = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media all and (min-width: 1100px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`

const Home = () => {
  return (
    <div>
      <Main>
        <Banner />
        <StyledContainer>
          {accommodationList.map(({ id, cover, title }) => (
            <StyledCard key={id}>
              <Gallery id={id} cover={cover} title={title} />
            </StyledCard>
          ))}
        </StyledContainer>
      </Main>
      <Footer />
    </div>
  )
}

export default Home
