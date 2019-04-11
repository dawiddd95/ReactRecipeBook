import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f3f3f3;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 50%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-weight: normal;
    font-size: 80px;
    color: #222;
  }
  
  h2 {
    margin-top: -60px;
    font-weight: normal;
    font-size: 80px;
    color: #656565;
  }

  a {
    margin-top: -10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }  
  }
`

export const Paragraph = styled.p`
  margin-top: -10px;
  margin-bottom: 40px;
`