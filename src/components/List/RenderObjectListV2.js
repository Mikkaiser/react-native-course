import React from 'react';
import names from './ListObject';
import {Text, FlatList} from 'react-native';

export default () => {

    const productRenderer = ({item}) => {
        return <Text>{item.name}</Text>
    }

    return (
        <>
            <Text>Product List</Text>
            <FlatList
                data={names}
                keyExtractor={item => item.name}
                renderItem={productRenderer}    
            />
        </>
    )
}