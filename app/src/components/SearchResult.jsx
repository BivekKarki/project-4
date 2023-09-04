import styled from 'styled-components'
import { BASE_URL, Button } from '../App';

const SearchResult = ({ data }) => {
  return (
    <>
        <FoodCardContainer>
          <FoodCards>
            {data?.map(({ name, image, text, price })=> (
            <FoodCard key={name}>
                <div className='food_image'>
                    <img src={BASE_URL + image} alt='' />
                </div>
                <div className='food_info'>
                    <div className="info">
                        <h3>{name}</h3>
                        <p>{text}</p>
                    </div>
                    <Button>${price.toFixed(2)}</Button>
                </div>
            </FoodCard>
            ))}
          </FoodCards>
        </FoodCardContainer>
    </>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("./bg.png");
  background-size: cover;

`;

const FoodCards = styled.div`
  /* display: flex;
  justify-content: space-between;
  gap: 20px; */
`;

const FoodCard = styled.div`
display: flex;
    width: 340px;
    height: 167px;
    flex-shrink: 0; 
    border-radius: 20px;
    border: 0.659px solid #98F9FF;
    background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(14px);
    padding: 8px;

    .food_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

        h3{
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }
        p{
            margin-top: 4px;
            font-size: 12px;
        }
        button{
            font-size: 12px;
        }

    }
`;