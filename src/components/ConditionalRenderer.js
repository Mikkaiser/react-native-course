import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default ({num}) => (
    <View>
        <Text style={style.bigFont}>
            {
                num % 2 === 0 ?
                'Pair':
                'Odd'
            }
        </Text>
    </View>
)

const style = StyleSheet.create({
    bigFont : {
        fontSize: 60
    }
});