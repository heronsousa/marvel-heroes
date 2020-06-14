import React from 'react';
import { 
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { 
    Container,
    NavigationBar,
    PageInfo,
    Title,
    SubTitle,
    Icons,
    Item,
    ItemHeader,
    Section,
    More,
    CharacterImage,
    Character,
    AlterEgo,
    Name,
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

    return (
        <Container>

            <NavigationBar>
                <Image source={menu} />
                <Image source={logo} tintColor='#f2264b' />
                <Image source={search} />
            </NavigationBar>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <PageInfo>
                    <SubTitle>Bem-vindo ao Marvel Heroes</SubTitle>
                    <Title>Escolha o seu personagem</Title>

                    <Icons>
                        {iconTypes.map(type => {
                            return(
                                <TouchableOpacity key={type.type}>
                                    <LinearGradient  
                                        colors={type.colors} 
                                        style={{
                                            width: 50, 
                                            height: 50, 
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 25,
                                        }}
                                    >
                                        <Image 
                                            source={type.type} 
                                            tintColor='#fff' 
                                            style={{width: 30, height: 30}}
                                        />
                                    </LinearGradient>
                                </TouchableOpacity>
                            )
                        })}
                    </Icons>
                </PageInfo>
            
                <Item>
                    <ItemHeader>
                        <Section>Heróis</Section>
                        <TouchableOpacity>
                            <More>Ver mais</More>
                        </TouchableOpacity>
                    </ItemHeader>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity>
                            <CharacterImage 
                                source={spider}
                                imageStyle={{ borderRadius: 20 }}
                            >
                                <Character>
                                    <AlterEgo>Peter Paker</AlterEgo>
                                    <Name>Homem Aranha</Name>
                                </Character>
                            </CharacterImage>
                        </TouchableOpacity>
                    </ScrollView>
                </Item>
            </ScrollView>

        </Container>
    )
}
