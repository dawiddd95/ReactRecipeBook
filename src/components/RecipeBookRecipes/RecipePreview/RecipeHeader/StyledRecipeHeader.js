import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 550px;
   margin-bottom: 30px;
   background-size: cover;
   background-position: center;

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
`

export const ImgFooter = styled.div`
   width: 100%;
   height: 150px;
   background-color: rgba(0,0,0,0.4);

   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`

export const Paragraph = styled.p`
   margin-right: 40px;
   margin-left: 100px;
   font-size: 36px;
   color: white;
   text-shadow: 2px 2px 10px #333;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
`

export const StarRating = styled.div`
   margin-top: -30px;
   margin-left: 100px;
   font-size: 26px;
   text-shadow: 2px 2px 10px #333;
`