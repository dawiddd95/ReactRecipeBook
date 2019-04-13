import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
   width: 80%;
   height: 350px;
   margin-right: auto;
   margin-left: auto;

   display: flex;
   justify-content: space-between;
`

export const Img = styled.div`
   width: 350px;
   height: 350px;
   border-radius: 10px;
   background-position: center;
   background-size: cover;
`

export const Content = styled.div`
   width: 65%;
   height: 100%;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const Main = styled.div`
   display: flex;
   flex-direction: column;
`

export const Title = styled.p`
   margin-top: 0;
   font-size: 30px;
   color:  #e74c3c;
`

export const Publisher = styled.div`
   margin-top: -10px;
      
   display: flex;
   align-items: center;
`

export const Span = styled.span`
   margin-right: 7px;
   font-weight: bold;
`

export const Paragraph = styled.p`
   font-weight: 500;
   color: #222;
`

export const Url = styled.div`
   margin-bottom: 15px;

   display: flex;
   align-items: center;
   flex-wrap: wrap;
`

export const Link = styled.a`
   color: #222;
   text-decoration: none;
      
   &:hover {
      text-decoration: underline;
   }

   ${props => props.footer && css`
      margin-right: 10px;
      padding: 10px 20px;
      font-weight: 500;
      font-size: 16px;
      font-family: 'Calibri';
      color: black;
      border: 2px solid #e74c3c;
      transition: .3s;
      text-decoration: none;
      cursor: pointer;

      &:hover {
         background-color: #e74c3c;
         color: white;
         transition: .3s;
         text-decoration: none;
      }
   `}
`

export const Footer = styled.footer`
   width: 100%;
   height: 50px;
`

