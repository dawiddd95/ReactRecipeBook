import styled, {css} from 'styled-components';

export const Button = styled.button`
   ${props => props.login && css`
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
   `}
   ${props => props.register && css`
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
   `}  
`