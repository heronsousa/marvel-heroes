import React from 'react'
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Container, CharacterImage } from './styles';

import spider from "../../../assets/chars/spider-man.png";

export default function Details() {

    return (
        <Container>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <CharacterImage 
                    source={spider}
                    resizeMode='contain'    
                />

                <LinearGradient
                    colors={['rgba(0,0,0, .20)', 'rgb(0,0,0)']}
                    style={{
                        width: '100%', 
                        height: 200,
                        position: 'absolute',
                        bottom: 0,
                    }}
                />
            </ScrollView>
        </Container>
    )
}
