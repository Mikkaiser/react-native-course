import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Style from '../style';

export default ({num}) => {
    return (
        <View style={style.Display}>
            <Text style={[style.color, Style.bigFont]}>
                {num}
            </Text>
        </View>
    )

}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000'
    },
    color: {
        color: '#fff',
        textAlign: 'center'
    }
})