import styled from 'styled-components';
import img from '../../images/empty.png';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const Img = styled.div`
   width: 300px;
   height: 200px;
   background-image: url(${img});
   background-size: cover;
   background-position: center;
`

export const Title = styled.div`
   margin-top: 10px;
   font-size: 26px;
   color: #808080;
`

export const Subtitle = styled.div`
   margin-top: 10px;
   font-size: 20px;
   color: #808080;
`