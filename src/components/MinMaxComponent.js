import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default ({max, min}) => {
    return (
        <Text style={Style.bigFont}>{max} is greater than {min} kkkkk</Text>
    );
}