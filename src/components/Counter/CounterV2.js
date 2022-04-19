import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import Style from '../style';
import DisplayCounter from './CounterDisplay';
import CounterButtons from './CounterButtons';

export default ({num}) => {

    const [numState, setNum] = useState(0);

    const inc = () => setNum(numState + 1);
    const dec = () => setNum(numState - 1);

    return (
        <>
            <Text style={Style.bigFont}>
                Counter
            </Text>
            <DisplayCounter num={numState} />
            <CounterButtons 
                inc={inc}
                dec={dec}
            />
        </>
    )
}