import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Style from '../style';

export default ({inc, dec}) => {

    return (
        <View>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </View>
    )
}