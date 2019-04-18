import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
`

export const LinksWrapper = styled.div`
   width: 100%;
   height: 100%;
   margin: 40px 0;
   
   display: flex;
   justify-content: center;

   a {
      width: 160px;
      height: 45px;
      margin: 0 10px;
      font-size: 16px;
      font-family: 'Arial';
      text-decoration: none;
      border: 1.5px solid black;
      border-radius: 5px;
      background-color: white;
      color: black;
      transition: .3s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
         transition: .3s;
         background-color: #222;
         color: white;
      }
   }
`