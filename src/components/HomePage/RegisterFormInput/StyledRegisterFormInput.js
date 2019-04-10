import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 90%;
   height: 70px;
   margin-left: 20px;
   color: #333;

   display: flex;
   flex-direction: column;

   input {
      height: 25px;
      margin-top: 10px;
      margin-left: -2px;
      padding-left: 10px;
      border-radius: 5px;
      background-color: rgba(255,255,255,0.9);
      border-width: 0.5px;
      outline: none;
   }
`

export const Label = styled.label`
   color: #333;
`
