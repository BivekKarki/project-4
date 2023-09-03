import styled from 'styled-components'

function App() {

  return (
    <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src="/logo.svg" alt='logo' />
          </div>

          <div className='search'>
            <input placeholder='Search Food...' />
          </div>
        </TopContainer>
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

`;

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: #fff;
      border-radius: 5px;
      height: 30px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;