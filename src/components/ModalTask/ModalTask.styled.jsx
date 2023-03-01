import styled from "styled-components";


export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 100;
background: rgba(17, 17, 17, 0.6);
transition: 0.5s;
`;

export const Modal = styled.div`
background: #ffffff;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 10px;
width: 50%;
height: 50%;
padding: 20px;
margin: 15% auto;
`;

export const Container = styled.div`
width: 100%
`