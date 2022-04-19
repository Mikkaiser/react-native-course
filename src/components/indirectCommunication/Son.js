import React from 'react';
import { Text, View, Button } from 'react-native';

export default ({min, max, _function}) => {

    function generateNumber() {
        return parseInt(Math.random() * (max - min) + min);
    }

    return (
        <Button
            title='Execute'
            onPress={function() {
                const n = generateNumber();
                _function(n)
            }}
        />
    )
}