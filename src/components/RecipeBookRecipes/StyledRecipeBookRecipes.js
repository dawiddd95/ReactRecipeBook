import styled from 'styled-components';

export const Button = styled.button`
   width: 200px;
   height: 30px;
   margin-top: -40px;
   left: 68%;   
   color: black;
   background-color: transparent;
   border: none;
   border: 2px solid #68CECE;
   border-radius: 10px;  
   position: fixed;
   cursor: pointer;
   outline: none;
   position: absolute;
   transition: .3s;

   display: flex;
   justify-content: center;
   align-items: center;

   &:hover {
      transition: .3s;
      color: white;
      background-color: #68CECE;
   }
`