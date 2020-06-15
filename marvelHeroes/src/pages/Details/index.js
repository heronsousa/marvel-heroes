import React from 'react'
import { 
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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

import spider from "../../../assets/chars/spider-man.png";
import spiderHome from "../../../assets/movies/spider-man-homecoming.jpg";
import spiderFar from "../../../assets/movies/spider-man-far-from-home.jpg";
import back from '../../../assets/icons/back.svg';
import age from '../../../assets/icons/age.svg';
import height from '../../../assets/icons/height.svg';
import weight from '../../../assets/icons/weight.svg';
import universe from '../../../assets/icons/universe.svg';

export default function Details() {
    const caracteristics = [
        {icon: age, value: '30 anos'},
        {icon: weight, value: '78kg'},
        {icon: height, value: '1.78m'},
        {icon: universe, value: 'Terra 616'}
    ];

    const habilidades = [
        ['force', 70],
        ['intelligence', 65],
        ['agility', 90],
        ['endurance', 60],
        ['velocity', 80]
    ];

    return (
        <ScrollView>
             <CharacterImage source={spider}>
                <LinearGradient
                    colors={['rgba(0,0,0, .0)', 'rgba(0,0,0, .0)', 'rgb(0,0,0)']}
                    style={{
                        flex:1,
                        padding: 20
                    }}
                >
                    <TouchableOpacity>
                        <Image source={back} tintColor='#fff'/>
                    </TouchableOpacity>
                    
                    <Character>
                        <AlterEgo>Peter Paker</AlterEgo>
                        <Name>Homem Aranha</Name>
                    </Character>

                    <Caracteristics>
                        {caracteristics.map(caracteristic => {
                            return(
                                <Caracteristic key={caracteristic.value}>
                                    <Image source={caracteristic.icon} tintColor='#fff'/>
                                    <IconDescription>{caracteristic.value}</IconDescription>
                                </Caracteristic>
                            )
                        })}
                    </Caracteristics>
                </LinearGradient>
            </CharacterImage>
            <Info>
                <Description>
                    Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos. 
                    Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.
                </Description>
                
                <InfoTitle>Habilidades</InfoTitle>

                {habilidades.map(habilidade => {
                    return (
                        <Skill key={habilidade[0]}>
                            <SkillType>{habilidade[0].charAt(0).toUpperCase() + habilidade[0].slice(1)}</SkillType>
                            <SkillBar value={(habilidade[1] - (habilidade[1]%2==0 ? 0 : 1))/2}/>
                        </Skill>
                    )
                })}

                <InfoTitle>Filmes</InfoTitle>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Movie source={spiderFar}/>
                    <Movie source={spiderHome}/>
                    <Movie source={spiderFar}/>
                    <Movie source={spiderHome}/>
                </ScrollView>
            </Info>
        </ScrollView>
    )
}
