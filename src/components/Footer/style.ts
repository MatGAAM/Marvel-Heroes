import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    background-color: #ff1510;

    height: 120px;
`

export const Content = styled.div`
    width: 992px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      a {
        svg {
          transition: color 0.2s;
          color: #F9F9F9;
          margin: 0.5rem;
        }
      }
    }

    p {
      color: #F9F9F9;
      font-weight: 500;
    }
`