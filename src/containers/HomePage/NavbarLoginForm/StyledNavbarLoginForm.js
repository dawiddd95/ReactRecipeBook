import styled from 'styled-components';

export const Form = styled.form`
   width: 50%;
   height: 100%;
   padding-right: 100px;

   display: flex;
   justify-content: flex-end;
   align-items: center;
`

export const Button = styled.button`
   width: 80px;
   height: 30px;
   margin-top: 2.5px;
   margin-left: 10px;
   border: 1.5px solid #FFA300;
   border-radius: 10px;
   background-color: black;
   color: white;
   transition: .3s;
   outline: none;
   cursor: pointer;

   &:hover {
      transition: .3s;
      background-color: #FFA300;
   }
`


