import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { 
    NavBar,
    MenuIcon,
    Icon,
    Title,
    SubTitle,
    Container,
    Item,
    Main,
    Header,
    ItemHeader,
    Section,
    More,
    CharacterImage,
    AlterEgo,
    Name,
    Character
} from './styles';

import spider from "../../../assets/chars/spider-man.png";
import logo from '../../../assets/icons/marvel.svg';
import search from '../../../assets/icons/search.svg';
import menu from '../../../assets/icons/menu.svg';
import villain from '../../../assets/icons/villain.svg';
import alien from '../../../assets/icons/alien.svg';
import antihero from '../../../assets/icons/antihero.svg';
import human from '../../../assets/icons/human.svg';
import hero from '../../../assets/icons/hero.svg';

export default function Home() {

    const iconTypes = [
        { colors: ['#005bea', '#00c6fb'], type: hero},
        { colors: ['#ed1d24', '#ed1f69'], type: villain},
        { colors: ['#B224EF', '#7579FF'], type: antihero},
        { colors: ['#0BA360', '#3CBA92'], type: alien},
        { colors: ['#FF7EB3', '#FF758C'], type: human},
    ];

    const gradient = {
        width: 50, 
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    }

    return (
        <Container>
            <Header>
                
                <NavBar>
                    <Image source={menu} />
                    <Image source={logo} tintColor='#f2264b' />
                    <Image source={search} />
                </NavBar>

                <SubTitle>Bem-vindo ao Marvel Heroes</SubTitle>
                <Title>Escolha o seu personagem</Title>

                <NavBar>
                    {iconTypes.map(type => {
                        return(
                            <LinearGradient 
                                key={type.type} 
                                colors={type.colors} 
                                style={gradient}
                            >
                                <Image 
                                    source={type.type} 
                                    tintColor='#fff' 
                                    style={{width: 30, height: 30}}
                                />
                            </LinearGradient>
                        )
                    })}
                </NavBar>
            </Header>
            
            <Item>
                <ItemHeader>
                    <Section>Heróis</Section>
                    <TouchableOpacity>
                        <More>Ver mais</More>
                    </TouchableOpacity>
                </ItemHeader>

                <Main
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <CharacterImage 
                        source={spider}
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <Character>
                            <AlterEgo>Peter Paker</AlterEgo>
                            <Name>Homem Aranha</Name>
                        </Character>
                    </CharacterImage>

                    <CharacterImage 
                        source={spider}
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <Character>
                            <AlterEgo>Peter Paker</AlterEgo>
                            <Name>Homem Aranha</Name>
                        </Character>
                    </CharacterImage>

                    <CharacterImage 
                        source={spider}
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <Character>
                            <AlterEgo>Peter Paker</AlterEgo>
                            <Name>Homem Aranha</Name>
                        </Character>
                    </CharacterImage>
                </Main>
            </Item>
        </Container>
    )
}
