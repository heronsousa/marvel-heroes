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
import data from '~/assets/application';


export default function Home() {

    const navigation = useNavigation();

    const iconTypes = [
        { colors: ['#005bea', '#00c6fb'], type: require('~/assets/icons/hero.svg')},
        { colors: ['#ed1d24', '#ed1f69'], type: require('~/assets/icons/villain.svg')},
        { colors: ['#B224EF', '#7579FF'], type: require('~/assets/icons/antihero.svg')},
        { colors: ['#0BA360', '#3CBA92'], type: require('~/assets/icons/alien.svg')},
        { colors: ['#FF7EB3', '#FF758C'], type: require('~/assets/icons/human.svg')},
    ];

    return (
        <Container>

            <NavigationBar>
                <Image source={require('~/assets/icons/menu.svg')} />
                <Image source={require('~/assets/icons/marvel.svg')} tintColor='#f2264b' />
                <Image source={require('~/assets/icons/search.svg')} />
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
