import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import Style from './style';

export default ({ initNumber }) => {

    const [initNumberState, changeNumber] = useState(initNumber);

    const inc = () => changeNumber(initNumberState + 1);
    

    const dec = () => changeNumber(initNumberState - 1);

    return (
        <View style={Style.alignHorizontal}>
            <View>
                <Button onPress={dec}
                        title='-'/>
            </View>
            <View>
                <Text style={Style.bigFont}>{initNumberState}</Text>
            </View>
            <View>
                <Button onPress={inc}
                        title='+'/>
            </View>
        </View>
    )
}