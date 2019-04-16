import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 70%;
   height: 100%;
   margin-top: ${props => props.methods ? 'margin-top: 40px' : 'margin-top: 0'};
   margin-left: 10px;
`

export const Title = styled.div`
   width: 90%;
   padding-bottom: 10px;
   font-size: 20px;
   border-bottom: 1px solid #D4E1DD;
`

export const OrderedList = styled.ol``

export const Li = styled.li`
   padding: 5px 0;
   font-family: 'Nunito Sans';
   font-style: italic;
`