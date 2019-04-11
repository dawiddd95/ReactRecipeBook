import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   background-color: #f2f2f2;

   display: flex;
   justify-content: center;
` 

export const Form = styled.form`
   width: 50%;
   height: 320px;
   margin-top: 60px;
   background-color: white;
   box-shadow: 7px 7px 7px 0 rgba(0,0,0,0.2);
   border: 2px solid darken(#e6e6e6,10);
   border-radius: 20px;

   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Input = styled.input`
   width: 40%;
   height: 30px;
   margin-top: 30px;
   margin-bottom: 40px;
   padding-left: 10px;
   border: none;
   border-bottom: 1px solid black;
   font-weight: bold;
   color: darken(silver,50);
   outline: none;
`

export const Button = styled.button`
   width: 100px;
   height: 30px;
   font-size: 16px;
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

export const Paragraph = styled.p`
   width: 90%;
   margin-left: 20px;
   margin-bottom: 40px; 
   padding: 0 0 10px 20px; 
   font-size: 24px;
   color: white;
   text-shadow: 2px 2px 10px #333;
   border-bottom: 1px solid #e6e6e6;
`