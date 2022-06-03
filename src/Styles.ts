import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #090909;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.7rem;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  width: 260px;
  padding: 15px;

  border-radius: 5px;
  background-color: #222;
`;

export const Display = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-radius: 5px;
  background-color: #111;
`;

export const Number = styled.h1`
  overflow-x: auto;

  font-size: 1.2rem;
  color: #fff;

  ::-webkit-scrollbar{
    height: 4px;
  }
  ::-webkit-scrollbar-track{
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb{
    height: 4px;
    background-color: #222;
  }
`;

export const Cells = styled.div`
  width: 100%;
  margin-top: 15px;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  button{
    min-width: 50px;
    min-height: 50px;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    transition: .1s;
  
    border: 0;
    border-radius: 5px;
    background-color: #CCC;
  
    font-weight: 600;
    font-size: .90rem;
  
    :focus{
      outline-offset: 2px;
      outline-color: #FFF;

      background-color: #AAA;
    }
    :hover{
      background-color: #AAA;
    }
    :nth-child(16){
      grid-row: 4 / 6;
      grid-column: 4 / 5;
  
      color: #FFF;
      background-color: #8A4AF3;
    }
    :nth-child(17){
      grid-column: 1 / 3;
    }
  }
`;

export const Cell = styled.div`

`;