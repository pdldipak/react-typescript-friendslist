import styled, { css } from 'styled-components';

export const AppWrapper = styled.div`
    text-align: center;
`;

export const List = styled.li`
    z-index: 50;
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 50rem;
    margin: 2rem auto;
    padding: 1rem;
    justify-content: space-between;
    border: 2px solid #f3f3f3;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    &:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
    }
`;

export const ListHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const ListImg = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    margin-right: 0.5rem;
`;

export const Name = styled.h2``;

export const Age = styled.p``;

export const Note = styled.p`
    width: 30%;
    text-align: left;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30rem;
    margin: 10rem auto;
`;

const reusableCSS = css`
    list-style: none;
    display: flex;
    align-items: center;
    width: 30rem;
    margin: 1rem auto;
    border: 0.1rem solid rgba(0, 0, 0, 0.233);
    padding: 1rem;
    justify-content: space-between;
`;

export const Input = styled.input`
    ${reusableCSS}
`;

export const TextArea = styled.textarea`
    ${reusableCSS} {
    }
`;

export const Button = styled.button`
    padding: 1rem;
    width: 200px;
    cursor: pointer;
    background-color: #0b5468;
    font-weight: 700;
    color: white;
    border: none;
    border-radius: 0.5rem;
`;

export const IconWrapper = styled.div`
    cursor: pointer;
`;
