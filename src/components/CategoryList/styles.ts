import styled from 'styled-components/native';

export const List = styled.ScrollView.attrs({
    horizontal: true,
})`
    padding: 8px 0 24px;
`;
export const CategoryContainer = styled.TouchableOpacity`
    margin-right: 10px;
`;
export const CategoryImage = styled.Image`
    width: 98px;
    height: 130px;
`;
export const CategoryName = styled.Text`
    margin-top: 5px;
    max-width: 98px;
    color: ${props => props.theme.black};
    font-family: roboto_700;
    font-size:  13.5px;
`;
export const CategoryStatus = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RedCircle = styled.View`
    background: ${props => props.theme.red};
    height: 9px;
    width: 9px;
    border-radius: 4.5px;
`;
export const Info = styled.Text`
    margin-left: 4px;
    padding-bottom: 1px;
    color: ${props => props.theme.gray};
    font-family: roboto_500;
`;