import styled from 'styled-components';

export const Form = styled.form`
   width: 80%;
   height: 100%;
   margin-top: 40px;
   margin-right: auto;
   margin-left: auto;
`

export const StarRating = styled.label`
   width: 100%;
   padding-left: 15px;
   border-left: 4px solid #333;
`

export const ElementWrapper = styled.div`
   width: 100%;
   height: 100%;
   margin-bottom: 20px;
`

export const ElementTitle= styled.div`
   width: 100%;
   height: 40px;
   margin-bottom: 20px;
   color: white;
   background-color: ${props => props.method ? '#E74C3C' : '#68CECE'};

   display: flex;
   align-items: center;
`

export const Paragraph = styled.p`
   margin-left: 10px;
`

export const ElementInputWrapper = styled.div`
   width: 100%;
   height: 100%;
   margin-bottom: 20px;
`

export const ElementInput = styled.div`
   width: 98.5%;
   height: ${props => props.method ? '80px' : '50px'};
   padding-left: 10px;
   border-left: 4px solid #333;

   display: flex;
   flex-wrap: ${props => props.method ? 'wrap' : ''};
   justify-content: space-between;
   align-items: center;
`

export const Input = styled.input`
   width: 95%;
   height: 30px;
   margin-top: ${props => props.method ? '-5px' : ''};
   padding-left: 10px;
   font-size: 18px;
   border: 1px solid #e6e6e6;
   outline: none;
`

export const Img = styled.img`
   width: 30px;
   height: 30px;
   margin-top: ${props => props.method ? '-5px' : ''};
   cursor: pointer;
`

export const MethodLabel = styled.label`
   width: 70%;
   margin-bottom: 0;
`;

export const MethodWrapper = styled.div`
   width: 100%;
   height: 30px;
   margin-top: 7px;

   display: flex;
   justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
   width: 100%;
   height: 50px;
   margin-top: 40px;
   margin-bottom: 20px;

   display: flex;
   align-items: center;

   a {
      width: 120px;
      height: 46px;
      background-color: white;
      color: #E74C3C;
      font-weight: 500;
      font-size: 15px;
      border: 2px solid #E74C3C;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      transition: .3s;

      display: flex;
      justify-content: center;
      align-items: center;
   
      &:hover {
         background-color: #E74C3C;
         color: white;
         transition: .3s;
      }
   }
`

export const Button = styled.button`
   width: 120px;
   height: 50px;
   margin-right: 20px;
   background-color: white;
   color: #68CECE;
   font-weight: 500;
   font-size: 15px;
   border: 2px solid #68CECE;
   border-radius: 10px;
   outline: none;
   cursor: pointer;
   transition: .3s;

   &:hover {
      background-color: #68CECE;
      color: white;
      transition: .3s;
   }
`

export const Error = styled.p`
   margin-top: -60px;
   margin-left: 300px;
   color: #E74C3C;
   position: absolute;
`
