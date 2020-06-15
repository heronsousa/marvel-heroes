import React from 'react'

import { 
    BarView,
    BarImage,
    BarImageValue,
    Bar
} from './styles';

import barLine from '../../../assets/icons/bar-white-19.png';

export default function SkillBar({ value }) {

    const barra = (value) => {
        var bar = [];
        for(var i=1; i<value; i++) {
            bar.push(
                <BarView key={i}>
                    <BarImage source={barLine}/>
                </BarView>
            )
        }
        
        bar.push(
            <BarView key={value}>
                <BarImageValue source={barLine}/>
            </BarView>
        )

        for(var i=value+1; i<=50; i++) {
            bar.push(
                <BarView key={i}>
                    <BarImage source={barLine} tintColor={'#808080'}/>
                </BarView>
            )
        }
        return bar
    }
    
    return (
        <Bar>
            {barra(value)}
        </Bar>
    )
}
