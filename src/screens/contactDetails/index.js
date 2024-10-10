import {View, Text, StyleSheet, TouchableOpacity, Image, PermissionsAndroid} from 'react-native';
import React from 'react';
import {colors} from '../../themes';
import Icons from '../../assets';
import {useRoute} from '@react-navigation/native';
import PrimaryButton from '../../components/PrimaryButton';
import Contacts from 'react-native-contacts';


const ContactDetails = ({navigation}) => {
  const route = useRoute();



  const DeleteContacts = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal', 
        },
      );
      if (permission === 'granted') {
        Contacts.deleteContact({recordID: route.params.data.recordID}).then(recordId => {
            // contact deleted
            navigation.goBack();
          })
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.back} source={Icons.back} />
        </TouchableOpacity>
        <View style={styles.textview}>
          <Text style={styles.addtext}>Contact Details</Text>
        </View>
      </View>
      <View style={styles.upper2} >
        <View style={styles.accountcont}>
      <Image source={Icons.user2} style={styles.account} />
      </View>
      <Text style={styles.name}>{route.params.data.displayName}</Text>
      <View style={styles.phoneview}>
        <Text style={styles.name1}>
          {route.params.data.phoneNumbers[0].number}
        </Text>
        <View style={styles.callview}>
          <TouchableOpacity onPress={()=>Linking.openURL(`sms:${item?.phoneNumbers[0]?.number}`)}>
            <Image source={Icons.comment} style={styles.delete} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL(`tel:${item?.phoneNumbers[0]?.number}`)}>
            <Image source={Icons.calls} style={styles.delete} />
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <View style={styles.buttonview}>
        <PrimaryButton text="Delete Contact" bg="rgba(42, 123, 187, 1)" onPress={()=>{ DeleteContacts() }}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  addtext: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#000'
  },
  textview: {
    flex: 1,
    alignItems: 'center',
    marginRight: 60,
  },
  upper: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  upper2:{
   margin:20,
   backgroundColor:colors.shadyblue,
   borderRadius:10,
   paddingVertical:20
  },
  back: {
    marginLeft: 20,
  },
  account: {
    alignSelf: 'center',
    height: 70,
    width: 70,
    marginTop:30,
  },
  name: {
    alignSelf: 'center',
    // marginTop: 20,
    fontSize: 20,
    color:'#000'
  },
  name1: {
    alignSelf: 'center',
    // marginTop: 20,
    fontSize: 20,
    color:'#000'
  },
  phoneview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor:colors.white,
    borderRadius:10,
    marginTop:10,
    padding:10,
    marginTop:40

  },
  delete: {
    height: 25,
    width: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  callview: {
    flexDirection: 'row',
    // marginTop: 20,
  },
  buttonview: {
    width: '90%',
    marginTop: 50,
    alignSelf: 'center',
  },
});

export default ContactDetails;
