import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
`

export const ButtonsWrapper = styled.div`
   width: 100%;
   height: 100%;
   margin: 40px 0;
   
   display: flex;
   justify-content: center;

   a {
      width: 160px;
      height: 43px;
      font-size: 16px;
      font-family: 'Arial';
      text-decoration: none;
      border: 1.5px solid black;
      background-color: black;
      color: white;
      transition: .3s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
         transition: .3s;
         background-color: white;
         color: black;
      }
   }
`

export const Button = styled.button`
   width: 140px;
   height: 45px;
   margin-right: 20px;
   font-size: 16px;
   font-family: 'Arial';
   background-color: black;
   border: 1.5px solid black;
   color: white;
   transition: .3s;
   cursor: pointer;

   &:hover {
      transition: .3s;
      background-color: white;
      color: black;
   }
`
