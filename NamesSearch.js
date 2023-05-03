import React, {useRef, useState,useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {
  FlatList,
  TextInput,
} from 'react-native-gesture-handler';
import themeContext from './theme/themeContext';

const names = [
  {name: 'Abdullah'},
  {name: 'Ahemd'},
  {name: 'Ali'},
  {name: 'Abid'},
  {name: 'Haider'},
  {name: 'Waqas'},
  {name: 'Zahid'},
];

const DropDown = () => {
  const theme=useContext(themeContext);
  const [selectedName, setSelectedName] = useState('Search Name');
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(names);
  const searchRef = useRef();
  const onSearch = txt => {
    if (txt !== '') {
      let tempData = data.filter(item => {
        return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(names);
    }
  };
  return (
    <View style={[styles.container,{backgroundColor:theme.background}]}>
      <Text style={[styles.heading,{color:theme.color} ]}>Names list</Text>
      <TouchableOpacity
        style={styles.dropDownSelector}
        onPress={() => {
          setIsClicked(!isClicked);
        }}>
        <Text style={{color:theme.color}}>{selectedName}</Text>
        {isClicked ? (
          <Image source={require('./assets/uppage.png')} style={styles.icon} />
        ) : (
          <Image source={require('./dropdown.png')} style={styles.downicon} />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={[styles.dropdownarea,{backgroundColor:theme.background}]}>
          <TextInput
            ref={searchRef}
            placeholder="Search"
            placeholderTextColor={{color:theme.color}}
            style={[styles.searchInput, {color:theme.color}]}
            onChangeText={txt => {
              onSearch(txt);
            }}
          />

          <FlatList
          style={{backgroundColor:theme.background}}
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    setSelectedName(item.name);
                    onSearch('');
                    setIsClicked(false);
                    searchRef.current.clear();
                  }}>
                  <Text style={{color:theme.color}}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DropDown;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 800,
    marginTop: 10,
    alignSelf: 'center',
  },
  dropDownSelector: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    width: 15,
    height: 15,
  },
  downicon: {
    width: 20,
    height: 20,
  },
  dropdownarea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    elevation: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 15,
  },
  countryItem: {
    width: '85%',
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
