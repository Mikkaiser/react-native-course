import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Son from './Son';

export default () => {

    const [numberState, setNum] = useState(0);

    function showValue(num) {
        setNum(num)
    }

    return (
        <>
            <Text>{numberState}</Text>
            <Son
                min={0}
                max={600}
                _function={showValue}
            />
        </>
    )
}