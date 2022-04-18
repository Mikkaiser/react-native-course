import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default ({ min, max }) => {
    const num = Math.random() * (max - min) + min;

    return <Text style={Style.bigFont}>
             Random Number: {num.toFixed(0)}
           </Text>
}