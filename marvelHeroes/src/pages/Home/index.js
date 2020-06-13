import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Title, Container, Item, Main, Header, Image, AlterEgo, Name, Character } from './styles';
import spider from "../../../assets/chars/spider-man.png";

export default function Home() {

    return (
        <Container>
            <Title>Titúlo</Title>
            
            <Item>
                <Header>
                    <Text>Heróis</Text>
                    <TouchableOpacity>
                        <Text>ver mais</Text>
                    </TouchableOpacity>
                </Header>

                <Main
                    horizontal
                    showsHorizontal={false}
                >
                    <Image 
                        source={spider}
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <Character>
                            <AlterEgo>Peter Paker</AlterEgo>
                            <Name>Homem Aranha</Name>
                        </Character>
                    </Image>

                    <Image 
                        source={spider}
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <Character>
                            <AlterEgo>Peter Paker</AlterEgo>
                            <Name>Homem Aranha</Name>
                        </Character>
                    </Image>

                    <Image 
                        source={spider}
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <Character>
                            <AlterEgo>Peter Paker</AlterEgo>
                            <Name>Homem Aranha</Name>
                        </Character>
                    </Image>
                </Main>
            </Item>
        </Container>
    )
}
