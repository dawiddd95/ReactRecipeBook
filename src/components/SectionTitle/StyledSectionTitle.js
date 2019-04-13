import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 60px;
   background-color: white;
   color: #333;
   box-shadow: 7px 7px 7px 0 rgba(0,0,0,0.2);

   display: flex;
   align-items: center;
` 

export const Paragraph = styled.p`
   margin-left: 40px;
`

export const RenderType = styled.div`
   margin-left: 7px;
`

export const FilterButtons = styled.div`
   width: 270px;
   height: 30px;
   margin-left: auto;
   margin-right: 40px;

   display: flex;
   justify-content: space-between;
   align-items: center;

   a {
      width: 80px;
      height: 30px;
   }
`