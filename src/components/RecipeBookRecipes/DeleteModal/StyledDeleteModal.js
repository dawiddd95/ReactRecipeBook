import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%; 
   top: 0;
   left: 0;
   background-color: rgb(0,0,0); 
   background-color: rgba(0,0,0,0.4);
   position: fixed;
   z-index: 1;  
   overflow: auto;
`

export const Content = styled.div`
   width: 50%; 
   margin: 15% auto;
   padding: 20px;
   background-color: #fefefe;
   border: 1px solid #888;
`

export const Paragraph = styled.p`
   font-size: 18px;
`

export const Span = styled.span`
   margin: 0 5px;
   color: #68CECE; 
`

export const ButtonsWrapper = styled.div`
   width: 100%;
   height: 40px;
   margin-top: 30px;
`

export const Button = styled.button`
   width: 100px;
   height: 30px;
   margin-right: ${props => props.cancel ? '20px' : '0px'};
   background-color: white;
   border: none;
   border-radius: 10px;
   outline: none;
   transition: .3s;
   border: ${props => props.cancel ? '2px solid #FFA300' : '2px solid #E74C3C'};
   cursor: pointer;

   &:hover {
      background-color: ${props => props.cancel ? '#FFA300' : '#E74C3C'};
      color: white;
      transition: 0.3s;
   }
`