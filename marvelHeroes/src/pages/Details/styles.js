import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
`

export const CharacterImage = styled.Image`
    height: 700px;
`

export const Name = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    max-width: 50%;
`

export const AlterEgo = styled.Text`
    font-size: 16px;
    color: #f8f8f8;
`

export const Caracteristic = styled.View`
    align-items: center;
`

export const IconDescription = styled.Text`
    font-size: 14px;
    color: #fff;
    margin-top: 10px;
`

export const Character = styled.View`
    position: absolute;
    top: 300px; 
    left: 0; 
    right: 0;
    padding: 20px;
    justify-content: flex-end;
    align-items: flex-start;
`

export const TouchableOpacity = styled.TouchableOpacity`
    position: absolute;
    top: 20px; 
    left: 20px; 
    right: 0;
    justify-content: flex-end;
    align-items: flex-start;
`

export const Caracteristics = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding: 20px;
    top: 460px; 
    left: 0; 
    right: 0;
`