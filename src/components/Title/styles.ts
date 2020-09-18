import styled from 'styled-components/native';

export const Container = styled.Text`
    color: ${props => props.theme.gray};
    background: ${props => props.theme.primary};

    font-family: roboto_700;
    font-size: 14px;
    text-transform: uppercase;

    padding: 9px 0;
`;
