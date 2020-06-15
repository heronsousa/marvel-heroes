import React from 'react'
import { View, Image } from 'react-native'

import barWhite19 from '../../../assets/icons/bar-white-19.png';
import barWhite27 from '../../../assets/icons/bar-white-27.png';
import barGray from '../../../assets/icons/bar-gray.png';

export default function SkillBar({ value }) {

    const barra = (value) => {
        var bar = [];
        for(var i=1; i<value; i++) {
            bar.push(
                <View style={{marginRight: 2, justifyContent: 'center'}}>
                    <Image key={i} source={barWhite19}/>
                </View>
            )
        }
        
        bar.push(
            <View style={{marginRight: 2, justifyContent: 'center'}}>
                <Image key={i} source={barWhite27}/>
            </View>
        )

        for(var i=1; i<50-value; i++) {
            bar.push(
                <View style={{marginRight: 2, justifyContent: 'center'}}>
                    <Image key={i} source={barGray}/>
                </View>
            )
        }
        return bar
    }
    
    return (
        <View style={{flexDirection: 'row'}}>
            {barra(value)}
        </View>
    )
}
