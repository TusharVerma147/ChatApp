import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  Platform
} from 'react-native';
import Contacts from 'react-native-contacts';
import Icons from '../../assets';
import {colors} from '../../themes';
import { useIsFocused } from '@react-navigation/native';
import Communications from 'react-native-communications';
const Account = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const isFocused = useIsFocused(); 

  useEffect(() => {
    ReadContacts();
  }, [isFocused]);

  
  const ReadContacts = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
      if (permission === 'granted') {
        const contact = await Contacts.getAll();
        setContacts(contact);
         console.log(JSON.stringify(contact))
   
      } else {
        setContacts([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addtext}>Contacts</Text>
      <View style={styles.flatView}>
        <FlatList
          data={contacts}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.flatlist} activeOpacity={0.6} onPress={()=>{navigation.navigate('ContactDetails',{data:item})}}>
                <View style={styles.imageStyle}>
                  <Text style={styles.textimg}>
                    {item?.displayName[0]?.toUpperCase()}
                  </Text>
                </View>
                <View
                  style={styles.nameview}>
                  <View>
                    <Text style={styles.text}>{item?.displayName}</Text>
                    <Text style={styles.text}>
                      {item?.phoneNumbers[0]?.number}
                    </Text>
                  </View>
                  <View style={styles.callview}>
                    <TouchableOpacity onPress={() =>Linking.openURL(`sms:${item?.phoneNumbers[0]?.number}`)}>
                      <Image source={Icons.comment} style={styles.delete} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Linking.openURL(`tel:${item?.phoneNumbers[0]?.number}`)}>
                      <Image source={Icons.calls} style={styles.delete} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity style={styles.plusview} onPress={()=>{navigation.navigate('AddContact')}}>
      <Image source={Icons.plus} style={styles.plus}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatView: {
    marginTop: 20,
  },
  flatlist: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.shadyblue,
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderColor: 'lightgray',
    flex: 1,
  },
  imageStyle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: colors.skyblue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    color: colors.gray,
  },
  textimg: {
    fontWeight: '500',
    color: colors.white,
  },
  listCont: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 8,
  },
  delete: {
    height: 25,
    width: 30,
    resizeMode: 'contain',
    marginLeft:10
  },
  callview: {
    flexDirection: 'row',
  },
  nameview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  plusview:{
    position:'absolute',
    right:20,
    bottom:20,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:48
  },
  plus:{
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  addtext:{
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'center',
    marginTop:20
  }
});

export default Account;
