import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 420px;
   height: 420px;
   margin-bottom: 20px;
   box-shadow: 7px 7px 7px 0 rgba(0,0,0,0.2);

   &:nth-child(-n+3) {
      margin-top: 20px;
   }
`

export const Img = styled.div`
   width: 100%;
   height: 250px;
   background-position: center;
   background-size: cover;
`

export const RecipeName = styled.p`
   width: 90%;
   height: 24px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   margin: 20px 0 5px 20px;
   font-size: 19px;
   color:  #e74c3c;
`

export const PublisherWrapper = styled.div`
   margin-left: 20px;
   font-size: 14px;

   display: flex;
`

export const Publisher = styled.p`
   margin-right: 5px;
   font-weight: bold;
`

export const PublisherName = styled.p`
   font-weight: normal;
`

export const Link = styled.div`
   width: 100%;
   height: 42px;
   margin-top: 10px;

   display: flex;

   a {
      margin-left: 20px;
      padding: 10px 30px;
      font-weight: 500;
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