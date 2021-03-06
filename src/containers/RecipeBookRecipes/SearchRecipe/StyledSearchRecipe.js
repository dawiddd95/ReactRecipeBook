import styled from 'styled-components'

export const Form = styled.form`
   width: 100%;
   height: 50px;
   margin-top: 20px;

   display: flex;
   justify-content: center;
   align-items: center;

   input {
      width: 350px;
      height: 80%;
      padding-left: 7px;
      font-size: 17px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #333;
      outline: none;
      transition: .3s;

      &::placeholder {
         font-size: 14px;
      }
   }
` 

export const Button = styled.button`
   width: 80px;
   height: 30px;
   margin-left: 20px;
   border: none;
   border: 1.5px solid #FFA300;
   border-radius: 10px;
   background-color: transparent;
   color: black;
   outline: none;
   cursor: pointer;

   &:hover {
      color: white;
      background-color: #FFA300;
      transition: .3s;
   }
`