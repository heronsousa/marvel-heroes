import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
`

export const Header = styled.View`
    padding: 20px;
`

export const NavBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export const MenuIcon = styled.Image`
`

export const Icon = styled.View`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

export const SubTitle = styled.Text`
    font-size: 14px;
    font-weight: 900;
    color: #b2b2c8;
`

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 25px;
`

export const Item = styled.View`
    padding-left: 20px; 
`

export const ItemHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;  
    margin-bottom: 10px;
    align-items: center;
    padding-right: 20px; 
`

export const Main = styled.ScrollView`

`
export const Section = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #f2264b;
`

export const More = styled.Text`
    font-size: 14px;
    color: #b7b7c8;
`

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`

export const AlterEgo = styled.Text`
    font-size: 10px;
    color: #b7b7c8;
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

export const CharacterImage = styled.ImageBackground`
    width: 140px;
    height: 200px;
    margin-right: 10px;
`
