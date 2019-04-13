import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
   width: 420px;
   height: 420px;
   margin: 0 0 20px 20px;
   box-shadow: 7px 7px 7px 0 rgba(0,0,0,0.2);
`

export const Img = styled.div`
   width: 100%;
   height: 250px;
   background-size: cover;
   background-position: center;
`

export const Paragraph = styled.p`
   width: 90%;
   height: 24px;
   margin: 20px 0 5px 20px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   font-size: 19px;
   color: black;

   ${props => props.footer && css`
      width: 100px;
      font-size: 14px;
      margin-top: 55px;
      margin-left: 280px;
      padding: 5px 20px 0 20px;
      color: #E74C3C;
      position: absolute;
   `}
`

export const StarRating = styled.div`
   margin-left: 20px;
   font-size: 24px;
`

export const Footer = styled.footer`
   width: 100%;
   height: 60px;

   display: flex;

   a {
      margin-top: 20px;
      margin-left: 20px;
      padding: 8px 30px;
      font-weight: 500;
      font-size: 16px;
      color: black;
      font-family: 'Calibri';
      background-color: white;
      border: solid 2px #e74c3c;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
         transition: 0.3s;
         background-color: #e74c3c;
         color: white;
      }   
   }
`

export const ButtonsWrapper = styled.div`
   width: 100px;
   height: 100%;
   margin-left: auto;
   margin-right: 30px;

   display: flex;
   justify-content: flex-end;
   align-items: center;
`

export const ButtonImg = styled.img`
   width: 23px;
   height: 23px;
   margin-top: 25px;
   margin-left: 15px;
   display: block;
   cursor: pointer;
`