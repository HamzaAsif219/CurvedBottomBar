import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
        {backgroundColor: theme.backgroundColor},
      ]}>
      <Text
      // style={{fontSize: 30}}
      // onPress={() => {
      //   navigation.navigate('NamesSearch');
      // }}
      >
        Click to search for names
      </Text>
    </View>
  );
};

export default Search;
