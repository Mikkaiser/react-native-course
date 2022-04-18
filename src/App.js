import React from 'react';
import First from './components/FirstComponent';
import Style from './components/style';

import { View } from 'react-native';

import MinMax from './components/MinMaxComponent';
import Random from './components/Random';
import ReactFragment from './components/ReactFragment';
import Button from './components/Button';

export default () => (
    <View style={[Style.bigFont, Style.mainView]}>
        {/* <First />
        <MinMax min={1} max={9} /> */}
        {/* <Random min={1} max={1000}/> */}
        {/* <ReactFragment/> */}
        <Button/>
    </View>
);
