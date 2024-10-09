// import React, {useState, useEffect, useCallback} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import Icons from '../../assets';
// import styles from './styles';
// import CustomTextInput from '../../components/CustomTextInput';
// import PrimaryButton from '../../components/PrimaryButton';
// import CustomModal from '../../components/CustomModal';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useFocusEffect} from '@react-navigation/native';

// interface ChattedUser {
//   id: number;
//   name: string;
//   profileImg: string;
// }

// const Home = ({navigation}: {navigation: any}) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const [chattedUsers, setChattedUsers] = useState<ChattedUser[]>([]);
//   const loadChattedUsers = async () => {
//     try {
//       const storedUsers = await AsyncStorage.getItem('chatted_users');
//       if (storedUsers) {
//         setChattedUsers(JSON.parse(storedUsers));
//       } else {
//         setChattedUsers([]);
//       }
//     } catch (error) {
//       console.error('Error loading chatted users: ', error);
//     }
//   };

//   useFocusEffect(
//     useCallback(() => {
//       loadChattedUsers();
//     }, []),
//   );

//   const renderItem = ({item}: {item: any}) => (
//     <TouchableOpacity
//       style={styles.flatlist}
//       activeOpacity={0.6}
//       onPress={() =>
//         navigation.navigate('Chat', {name: item.name, profile: item.profileImg})
//       }>
//       <View style={styles.imageStyle}>
//         <Text style={styles.textimg}>{item.profileImg}</Text>
//       </View>
//       <Text style={styles.text}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   const startchat = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const newchat = () => {
//     navigation.navigate('Search');
//     setModalVisible(false);
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.upper}>
//         <View>
//           <Text style={styles.location}>Messages</Text>
//           <Text style={styles.sub2}>{chattedUsers.length } Contacts</Text>
//         </View>
//         <TouchableOpacity onPress={startchat}>
//           <Image source={Icons.plus} style={styles.img3} />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.lower}>
//         <View style={styles.input}>
//           <Image source={Icons.search} />
//           <CustomTextInput
//             placeholder="Search messages..."
         
//           />
//         </View>
//         <View style={styles.listCont}>
//           {chattedUsers.length > 0 ? (
//             <FlatList
//               data={chattedUsers}
//               renderItem={renderItem}
//               // keyExtractor={item => item.name}
//             />
//           ) : (
//             <View style={styles.nochat}>
//               <Image style={styles.nochatimg} source={Icons.nochat} />
//               <PrimaryButton
//                 text="Start Chat"
//                 onPress={startchat}
//                 bg="rgba(42, 123, 187, 1)"
//               />
//             </View>
//           )}
   

//         </View>
//       </View>
//       <CustomModal
//         visible={modalVisible}
//         onClose={closeModal}
//         close={closeModal}
//         newchat={newchat}
//       />
//     </View>
//   );
// };

// export default Home;
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icons from '../../assets';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import CustomModal from '../../components/CustomModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

interface ChattedUser {
  id: number;
  name: string;
  profileImg: string;
}

const Home = ({ navigation }: { navigation: any }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [chattedUsers, setChattedUsers] = useState<ChattedUser[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearch, setHasSearch] = useState(false);

  const loadChattedUsers = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('chatted_users');
      if (storedUsers) {
        setChattedUsers(JSON.parse(storedUsers));
      } else {
        setChattedUsers([]);
      }
    } catch (error) {
      console.error('Error loading chatted users: ', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadChattedUsers();
    }, [])
  );

  const filteredUsers = chattedUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }: { item: ChattedUser }) => (
    <TouchableOpacity
      style={styles.flatlist}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate('Chat', { name: item.name, profile: item.profileImg })
      }
    >
      <View style={styles.imageStyle}>
        <Text style={styles.textimg}>{item.profileImg}</Text>
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  const startChat = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const newChat = () => {
    navigation.navigate('Search');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View>
          <Text style={styles.location}>Messages</Text>
          <Text style={styles.sub2}>{chattedUsers.length} Contacts</Text>
        </View>
        <TouchableOpacity onPress={startChat}>
          <Image source={Icons.plus} style={styles.img3} />
        </TouchableOpacity>
      </View>
      <View style={styles.lower}>
        <View style={styles.input}>
          <Image source={Icons.search} />
          <CustomTextInput
            placeholder="Search messages..."
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text);
              setHasSearch(text.length > 0);
            }}
          />
        </View>
        <View style={styles.listCont}>
          {hasSearch && filteredUsers.length === 0 && (
            <View style={styles.nochat}>
              <Image source={Icons.noresult} style={styles.noResultsimg}/>
              <PrimaryButton
                  text="Start Chat"
                  onPress={startChat}
                  bg="rgba(42, 123, 187, 1)"
                />
            </View>
          )}
          {filteredUsers.length > 0 ? (
            <FlatList
              data={filteredUsers}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          ) : (
            !hasSearch && (
              <View style={styles.nochat}>
                <Image style={styles.nochatimg} source={Icons.nochat} />
                <PrimaryButton
                  text="Start Chat"
                  onPress={startChat}
                  bg="rgba(42, 123, 187, 1)"
                />
              </View>
            )
          )}
        </View>
      </View>
      <CustomModal
        visible={modalVisible}
        onClose={closeModal}
        close={closeModal}
        newchat={newChat}
      />
    </View>
  );
};

export default Home;
