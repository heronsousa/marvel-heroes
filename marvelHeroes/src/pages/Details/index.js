import React from 'react'
import { ScrollView, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Container, CharacterImage, Character, AlterEgo, TouchableOpacity, Name, Caracteristics, Caracteristic, IconDescription, Icon } from './styles';

import spider from "../../../assets/chars/spider-man.png";
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
    ]

    return (
        <Container>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <CharacterImage 
                    source={spider}
                    resizeMode='contain'    
                />
                <TouchableOpacity>
                    <Image source={back} tintColor='#fff'/>
                </TouchableOpacity>

                <LinearGradient
                    colors={['rgba(0,0,0, .20)', 'rgb(0,0,0)']}
                    style={{
                        width: '100%', 
                        height: 200,
                        position: 'absolute',
                        bottom: 0,
                    }}
                />

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
            </ScrollView>
        </Container>
    )
}
