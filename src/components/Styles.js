
import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: gray;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   right: 20px;
   bottom: 60px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: gray;
   &:hover {
      color: red;
    }
`
