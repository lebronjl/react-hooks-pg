import React from 'react';
import styled from 'styled-components';

interface IProps {
    title: string;
    children: React.ReactNode;
}

export const StyledSection: React.FC<IProps> = (props: IProps) => {
    return (
        <StyledDiv>
            <StyledTitle>{props.title}</StyledTitle>
            {props.children}
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
    background: papayawhip;
`;

const StyledTitle = styled.p`
    padding: 10px;
    margin: 10px;
    color: black;
    font-size: 40px;
`;
