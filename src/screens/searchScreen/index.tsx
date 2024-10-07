import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Data from '../../../data.json';
import Icons from '../../assets';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

interface Item {
  id: number;
  name: string;
  profileImg: string;
}

const Search = ({navigation}: {navigation: any}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Item[]>(Data);

  
  const click=(item:any)=>{
    navigation.navigate('Chat', {name: item?.name ?? 'name',profile:item?.profileImg});
  }
  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.flatlist} activeOpacity={0.6} onPress={() => click(item)}>
      <View style={styles.imageStyle}>
        <Text style={styles.textimg}>{item.profileImg}</Text>
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filteredItems = Data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(filteredItems);
    } else {
      setFilteredData(Data);
    }
  };

  const back = () => {
    navigation.navigate('BottomTab');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image style={styles.back} source={Icons.back} />
        </TouchableOpacity>
        <View style={styles.input}>
        <Image source={Icons.search}/>
          <CustomTextInput
            placeholder="Search here..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
        <View style={styles.listCont}>
        {filteredData.length > 0 ? (
          <FlatList
            bounces={false}
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.noResults}>
           <Image source={Icons.noresult} style={styles.noResultsimg}/>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

