import styled from 'styled-components';

export const Title = styled.Text`
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    padding: 10px;
`

export const Item = styled.View`
    
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;    
`

export const Main = styled.ScrollView`

`
export const Name = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: #fff;
`

export const AlterEgo = styled.Text`
    font-size: 15px;
    color: #999;
`

export const Character = styled.View`
    position: absolute;
    top: 0; 
    left: 10px; 
    right: 0;
    bottom: 5px;
    justify-content: flex-end;
    align-items: flex-start;
`

export const Image = styled.ImageBackground`
    width: 150px;
    height: 200px;
    margin-right: 10px;
`
