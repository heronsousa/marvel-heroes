import React from 'react';
import { 
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

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
    AlterEgo,
    Name,
} from './styles';
import data from '../../../assets/application';

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

    console.log(data.heroes)

    const sla = new Map(Object.entries(data));

    const navigation = useNavigation();

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
            
                {Object.keys(data).map((type) => (
                    <Item key={type}>
                        <ItemHeader>
                            <Section>{type.charAt(0).toUpperCase() + type.slice(1)}</Section>
                            <TouchableOpacity>
                                <More>Ver mais</More>
                            </TouchableOpacity>
                        </ItemHeader>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            >
                            {data[type].map(character => (
                                <TouchableOpacity key={character.name} onPress={ () => { navigation.navigate('Details', {character}) } }>
                                    <CharacterImage 
                                        source={character.imagePath}
                                        imageStyle={{ borderRadius: 20 }}
                                        >
                                        <AlterEgo>{character.alterEgo}</AlterEgo>
                                        <Name>{character.name}</Name>
                                    </CharacterImage>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </Item>
                ))}
            </ScrollView>

        </Container>
    )
}
