import styled, {css} from 'styled-components';

export const Label = styled.label`
   width: 98.7%;
   height: 70px;
   margin-bottom: 20px;
   padding-left: 10px;
   border-left: 4px solid #333;

   display: flex;
   flex-wrap: wrap;

   input {
      width: 99%;
      height: 30px;
      padding-left: 10px;
      font-size: 15px;
      border: none;
      border: 1px solid #e6e6e6;
      outline: none;

      ::placeholder {
         font-size: 12px;
      }
   } 

   ${props => props.properties && css`
      width: 46%;
      height: 70px;
      margin-bottom: 20px;
      padding-left: 10px;
      border-left: 4px solid #333;

      display: flex;
      flex-wrap: wrap;

      input {
         width: 100%;
         height: 30px;
         padding-left: 10px;
         font-size: 18px;
         border: none;
         border: 1px solid #e6e6e6;
         outline: none;
      }      
   `}
` 
