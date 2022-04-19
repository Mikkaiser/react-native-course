import React from 'react';
import First from './components/FirstComponent';
import Style from './components/style';

import { View } from 'react-native';

import MinMax from './components/MinMaxComponent';
import Random from './components/Random';
import ReactFragment from './components/ReactFragment';
import Button from './components/Button';
import Counter from './components/Counter';
import Father from './components/indirectCommunication/Father';

export default () => (
    <View style={[Style.mainView]}>
        {/* <First />
        <MinMax min={1} max={9} /> */}
        {/* <Random min={1} max={1000}/> */}
        {/* <ReactFragment/> */}
        {/* <Button/> */}
        {/* <Counter initNumber={0} /> */}
        <Father/>
    </View>
);
