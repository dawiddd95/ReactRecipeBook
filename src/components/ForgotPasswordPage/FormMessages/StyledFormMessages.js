import styled from 'styled-components';

export const Paragraph = styled.p`
   color: ${props => props.errorColor ? 'red' : '#00CC00'};
`