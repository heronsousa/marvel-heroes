import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
`

export const NavigationBar = styled.View`
    padding: 10px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const PageInfo = styled.ScrollView`
    padding: 20px;
`

export const Icons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
    margin-bottom: 30px;
`

export const ItemHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;  
    margin-bottom: 10px;
    align-items: center;
    padding-right: 20px; 
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
    font-size: 12px;
    color: #fff;
`

export const CharacterImage = styled.ImageBackground`
    width: 170px;
    height: 230px;
    margin-right: 10px;
    justify-content: flex-end;
    padding: 10px;
`
