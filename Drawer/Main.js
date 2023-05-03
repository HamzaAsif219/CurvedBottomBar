import React from 'react';
import {Text, View} from 'react-native';

//import BottomNavigator from '../Bottom/BottomNavigator';
import BottomNavigator from '../BottomNavigator';
import Curved from '../CurvedBottomBarr';

export const Main = props => {
  return (
    <View style={{flex: 1}}>
      <Curved />
    </View>
  );
};
