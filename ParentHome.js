import React from 'react';
import {Text, View} from 'react-native';
import DrawerNavigator from './DrawerNavigator';

import Curved from './Curved';

function ParentHome(props) {
  return (
    <View style={{flex: 1}}>
      <Curved/>
    </View>
  );
}

export default ParentHome;
