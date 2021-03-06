import styled from 'styled-components'

export const Paragraph = styled.p`
   margin-top: 30px;
   margin-left: 110px;
   font-size: 14px;
   color: rgba(255,255,255,0.4);
   position: absolute;
   transition: .3s;
   cursor: pointer;

   &:hover {
      transition: .3s;
      color: white;
      text-decoration: underline;
   }
`
