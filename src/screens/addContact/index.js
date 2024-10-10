import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from '../../assets';
import PrimaryButton from '../../components/PrimaryButton';
import {colors} from '../../themes';
import Contacts from 'react-native-contacts';

const AddContact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const Verify=()=>{
    let value=true;
    if(!name.trim()){
        value=false
    }
    if(!phone.trim()){
        value=false
    }
    if(value===true){
        WriteContacts();
    }
    else{
        Alert.alert("Please enter details")
    }
  }

  const WriteContacts = async () => {
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
        let newPerson = {
          emailAddresses: [
            {
              label: 'work',
              email: email,
            },
          ],
          phoneNumbers: [{
            label: 'mobile',
            number: phone,
          }
          ],
          familyName: name,
        //   givenName: name,
        };

        Contacts.addContact(newPerson);
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
          <Text style={styles.addtext}>Add Contact</Text>
        </View>
      </View>
      <Image source={Icons.user2} style={styles.account} />
      <TextInput
        placeholder="Enter Name"
        placeholderTextColor={'#000'}
        value={name}
        onChangeText={txt=>setName(txt)}
        style={styles.inputname}
      />
      <TextInput
        placeholder="Enter Email"
        placeholderTextColor={'#000'}
        value={email}
        onChangeText={txt=>setEmail(txt)}
        style={styles.inputemail}
      />
      <TextInput
        placeholder="Enter Mobile"
        placeholderTextColor={'#000'}
        value={phone}
        onChangeText={txt=>setPhone(txt)}
        maxLength={10}
        keyboardType="number-pad"
        style={styles.inputemail}
      />
      <View style={styles.buttonview}>
        <PrimaryButton text="Save Contact" bg="rgba(42, 123, 187, 1)" onPress={()=>Verify()}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shadyblue,
  },
  back: {
    marginLeft: 20,
  },
  account: {
    alignSelf: 'center',
    height: 70,
    width: 70,
  },
  inputname: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 15,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  inputemail: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 15,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  buttonview: {
    width: '90%',
    marginTop: 50,
    alignSelf: 'center',
  },
  addtext: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textview: {
    flex: 1,
    alignItems: 'center',
    marginRight: 60,
  },
  upper: {flexDirection: 'row', marginTop: 20, alignItems: 'center'},
});

export default AddContact;
