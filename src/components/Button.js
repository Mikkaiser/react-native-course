import React from 'react';
import { Text, View, Button } from 'react-native';
import Style from './style';

export default () => {

    const execute = () => {
        console.warn('Hello World!')
    }

    return (
        <>
            <Button
                title='Execute'
                onPress={execute}
            />
        </>
    )
}
