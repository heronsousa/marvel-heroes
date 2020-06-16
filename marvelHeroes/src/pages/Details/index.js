import React from 'react'
import { 
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

import SkillBar from '../../components/SkillBar';
import { 
    CharacterImage,
    Character,
    AlterEgo,
    Name,
    Caracteristics,
    Caracteristic,
    Info,
    Description,
    IconDescription,
    InfoTitle,
    Skill,
    SkillType,
    Movie
} from './styles';

import back from '../../../assets/icons/back.svg';
import birth from '../../../assets/icons/age.svg';
import height from '../../../assets/icons/height.svg';
import weight from '../../../assets/icons/weight.svg';
import universe from '../../../assets/icons/universe.svg';

export default function Details() {
    
    const navigation = useNavigation();
    const route = useRoute();

    const character = route.params.character;

    const caracteristicIcon = {
        'birth' : birth,
        'height' : height,
        'weight' : weight,
        'universe' : universe
    }
    console.log(Object.values(character.caracteristics['weight']).join())

    return (
        <ScrollView>
             <CharacterImage source={character.imagePath}>
                <LinearGradient
                    colors={['rgba(0,0,0, .0)', 'rgba(0,0,0, .0)', 'rgb(0,0,0)']}
                    style={{
                        flex:1,
                        padding: 20
                    }}
                >
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image source={back} tintColor='#fff'/>
                    </TouchableOpacity>
                    
                    <Character>
                        <AlterEgo>{character.alterEgo}</AlterEgo>
                        <Name>{character.name}</Name>
                    </Character>

                    <Caracteristics>
                    {Object.keys(character.caracteristics).map((caracteristic) => (
                        <Caracteristic key={caracteristic}>
                            <Image source={caracteristicIcon[caracteristic]} tintColor='#fff'/>
                            <IconDescription>
                                {typeof character.caracteristics[caracteristic] !== 'object' ? 
                                    (caracteristic==='birth' ? 2020-character.caracteristics[caracteristic] : character.caracteristics[caracteristic])
                                    : 
                                    Object.values(character.caracteristics[caracteristic]).join(' ')}
                            </IconDescription>
                        </Caracteristic>
                    ))}
                    </Caracteristics>
                </LinearGradient>
            </CharacterImage>
            <Info>
                <Description>{character.biography}</Description>
                
                <InfoTitle>Habilidades</InfoTitle>

                {Object.keys(character.abilities).map((abilitie) => (
                    <Skill key={abilitie}>
                        <SkillType>{abilitie.charAt(0).toUpperCase() + abilitie.slice(1)}</SkillType>
                        <SkillBar value={(character.abilities[abilitie] - (character.abilities[abilitie]%2==0 ? 0 : 1))/2}/>
                    </Skill>
                ))}

                <InfoTitle>Filmes</InfoTitle>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {character.movies.map((movie, key) => (
                        <Movie key={key} source={movie}/>
                    ))}
                </ScrollView>
            </Info>
        </ScrollView>
    )
}
