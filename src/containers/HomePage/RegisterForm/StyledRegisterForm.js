import styled from 'styled-components';

export const Form = styled.form`
   width: 400px;
   min-height: 590px;
   margin-top: 60px;
   margin-left: 40px;
   position: absolute;
   border-radius: 20px;
   border: 2px solid white;
   background-color: rgba(255,255,255,0.4);


   h2 {
      margin: 30px 40px;
      font-size: 22px;
      color: white;
      text-shadow: 2px 2px 10px #333;

      &:last-child {
         margin-top: -20px;
      }
   }
`

export const InputsWrapper = styled.div`
   height: 330px;
`

export const SubmitWrapper = styled.div`
   width: 100%;
   height: 60px;

   display: flex;

   p {
      margin-top: 18px;
      margin-left: 15px;
      color: darken(red,20);
      text-shadow: 2px 2px 10px #333;
   }
`

export const Button = styled.button`
   width: 100px;
   height: 40px;
   margin-top: 10px;
   margin-left: 15px;
   font-size: 18px;
   border: 2px solid #FFA300;
   border-radius: 10px;
   background-color: transparent;
   transition: .3s;
   outline: none;
   cursor: pointer;

   &:hover {
      color: white;
      background-color: #FFA300;
   }
`