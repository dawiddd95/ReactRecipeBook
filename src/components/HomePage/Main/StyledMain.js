import styled from 'styled-components';
import backgroundImg from '../../../images/home.jpg';

export const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url(${backgroundImg});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   display: flex;
   justify-content: space-between;
`

export const Title = styled.div`
   width: 50%;
   height: 90%;
   margin-left: auto;
   color: white;
   text-shadow: 2px 2px 10px #333;

   h1 {
      margin-top: 50%;
      font-size: 55px;
   }

   h2 {
      margin-top: -30px;
      font-size: 29px;
   }
`
