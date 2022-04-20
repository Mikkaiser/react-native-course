import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

export default () => {
    const [name, setName] = useState('Test');
    return (
        <View>
            <TextInput
                placeholder='TYpe Your Name'
                value={name}
                onChangeText={name => setName(name)}
            />
        </View>
    )
}