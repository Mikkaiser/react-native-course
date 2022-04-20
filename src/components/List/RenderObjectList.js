import React from 'react';
import {Text} from 'react-native';
import names from './ListObject';

export default () => {

    const getList = () => {
        return names.map(n => {
            return (
                <Text key={n.name}>{n.name}</Text>
            )
        })
    }

    return (
        <>
            <Text>Product List</Text>
            {getList()}
        </>
    )
}