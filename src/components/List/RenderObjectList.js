import React from 'react';
import names from './ListObject';
import {Text} from 'react-native';

export default () => {

    function getList () {
        return names.map(n => {
            return (
                <Text>n.name</Text>
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