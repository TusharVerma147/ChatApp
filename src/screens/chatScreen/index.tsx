import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat, InputToolbar, Send, Bubble} from 'react-native-gifted-chat';
import Icons from '../../assets';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import CustomModal1 from '../../components/CustomModal1';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface Message {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name?: string;
    avatar?: string;
  };
  emoji?: string | null;
}

const Chat = ({navigation}: {navigation: any}) => {
  const [dotmodalVisible, setdotModalVisible] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reactionModalVisible, setReactionModalVisible] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const [emojis] = useState(['😀', '❤️', '👍', '😢', '🎉']);
  const route = useRoute();
  const {name, profile} = route?.params;

  const userId = 1;

  const storageKey = `chat_messages_${userId}_${profile || name}`;

  const chattedUsersKey = 'chatted_users';


  useEffect(() => {
    const loadMessages = async () => {
      try {
        const storedMessages = await AsyncStorage.getItem(storageKey);
        if (storedMessages) {
          setMsgs(JSON.parse(storedMessages));
        }
      } catch (error) {
        console.error('Error loading messages: ', error);
      }
    };

    loadMessages();
  }, [storageKey]);
  



  useEffect(() => {
    const saveMessages = async (newMessages: Message[]) => {
      try {
        await AsyncStorage.setItem(storageKey, JSON.stringify(newMessages));
      } catch (error) {
        console.error('Error saving messages: ', error);
      }
    };

    saveMessages(msgs);
  }, [msgs, storageKey]);

  useEffect(() => {
    const addUserToChattedList = async () => {
      try {
        const storedUsers = await AsyncStorage.getItem(chattedUsersKey);
        const chattedUsers: any[] = storedUsers ? JSON.parse(storedUsers) : [];

        
        const userExists = chattedUsers.some((user) => user.name === name);
        if (!userExists) {
          const newUser = {
            id: Date.now(), 
            name,
            profileImg: profile,
          };
          const updatedUsers = [...chattedUsers, newUser];
          await AsyncStorage.setItem(chattedUsersKey, JSON.stringify(updatedUsers));
        }
      } catch (error) {
        console.error('Error adding user to chatted list: ', error);
      }
    };

    addUserToChattedList();
  }, [name, profile]);


  const more = () => {
    setdotModalVisible(true);
  };

  const closeModal = () => {
    setdotModalVisible(false);
  };

  const back = () => {
    navigation.navigate('Search');
  };



  const deleteMessages = async () => {
    try {
      await AsyncStorage.removeItem(storageKey); 
      const storedUsers = await AsyncStorage.getItem('chatted_users');
      if (storedUsers) {
        const chattedUsers = JSON.parse(storedUsers);
        const updatedUsers = chattedUsers.filter(user => user.name !== name);
        await AsyncStorage.setItem('chatted_users', JSON.stringify(updatedUsers));
      }
  
      setMsgs([]); 
      setdotModalVisible(!dotmodalVisible);
      
     
      Alert.alert(
        'Chat Deleted',
        'The chat has been successfully deleted.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    } catch (error) {
      console.error('Failed to delete messages', error);
    }
  };
  
  

  const renderActions = useCallback(() => {
    return (
      <TouchableOpacity>
        <Image source={Icons.plus} style={styles.add} />
      </TouchableOpacity>
    );
  });

  const renderSend = props => (
    <Send {...props} containerStyle={styles.sendCont}>
      <Image source={Icons.plane} style={styles.send} />
    </Send>
  );

 
  const handleLongPress = (context, message) => {
    setSelectedMessage(message);
    setReactionModalVisible(true);
  };

 
  const handleDelete = () => {
    setReactionModalVisible(false);  
    setdeleteModal(true)

    
  };
  const confirmDelete = () => {
    setMsgs(prevMsgs =>
      prevMsgs.filter(msg => msg._id !== selectedMessage._id),
    );
    setReactionModalVisible(false);
    setdeleteModal(false);
  };

  
  const handleEmojiSelect = emoji => {
    setMsgs(prevMsgs =>
      prevMsgs.map(msg =>
        msg._id === selectedMessage._id
          ? {...msg, emoji: msg.emoji === emoji ? null : emoji}
          : msg,
      ),
    );
    setReactionModalVisible(false);
  };


  // const renderMessage = props => {
  //   const {currentMessage} = props;
  //   return (
  //     <View>
  //       <Bubble {...props} />
  //       {currentMessage.emoji ? (
  //         <View style={styles.reactionContainer}>
  //           <Text style={styles.reactionEmoji}>{currentMessage.emoji}</Text>
  //         </View>
  //       ) : null}
  //     </View>
  //   );
  // };


  const renderMessage = props => {
    const {currentMessage} = props;
  
    const handleEmojiTap = () => {
      setMsgs(prevMsgs =>
        prevMsgs.map(msg =>
          msg._id === currentMessage._id
            ? {...msg, emoji: null} 
            : msg,
        ),
      );
    };
  
    return (
      <View>
        <Bubble {...props} />
        {currentMessage.emoji ? (
          <TouchableOpacity onPress={handleEmojiTap}>
            <View style={styles.reactionContainer}>
              <Text style={styles.reactionEmoji}>{currentMessage.emoji}</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.upper1}>
          <TouchableOpacity onPress={back}>
            <Image source={Icons.back} style={styles.back} />
          </TouchableOpacity>
          <View style={styles.upper1}>
            <View style={styles.profileimg}>
              <Text style={styles.profileimgtext}>{profile}</Text>
            </View>
            <View>
              <Text style={styles.nametext}>{name}</Text>
              <Text style={styles.clocked}>Clocked in</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={more}>
          <View>
            <Image source={Icons.more} style={styles.more} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.giftedview}>
        <GiftedChat
          messages={msgs}
          onSend={messages => {
            setMsgs(prev => GiftedChat.append(prev, messages));
          }}
          onLongPress={handleLongPress}
          user={{_id: userId}}
          renderMessage={renderMessage}
          textInputStyle={styles.textinputstyle}
          renderInputToolbar={props => (
            <InputToolbar containerStyle={styles.containerStyle} {...props} />
          )}
          renderActions={renderActions}
          placeholder="Your typed message"
          renderSend={renderSend}
        />
      </View>

      <Modal
        visible={reactionModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setReactionModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={emojis}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleEmojiSelect(item)}>
                  <Text style={styles.emoji}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item}
              style={styles.emojiList}
            />
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image source={Icons.reply} style={styles.delete} />
                <Text style={styles.chattext}>Reply</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image source={Icons.forward} style={styles.delete} />
                <Text style={styles.chattext}>Forward</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image source={Icons.copy} style={styles.delete} />
                <Text style={styles.chattext}>Copy</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image style={styles.delete} source={Icons.star} />
                <Text style={styles.chattext}>Star</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image source={Icons.edit} style={styles.delete} />
                <Text style={styles.chattext}>Edit</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity onPress={handleDelete}>
              <View style={styles.listview}>
                <Image style={styles.delete} source={Icons.delete} />
                <Text style={styles.deletetext}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent
        visible={deleteModal}
        animationType="fade"
        onRequestClose={() => setdeleteModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer1}>
            <View style={styles.deleteiconview}>
            <Image source={Icons.delete} style={styles.delete}/>
            </View>
            <Text style={styles.accountText}>Delete Message?</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this message?
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.primaryCont1}
                onPress={() => setdeleteModal(false)}>
                <Text style={styles.primary1}>No,Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.primaryCont}
                onPress={confirmDelete}>
                <Text style={styles.primary}>Yes, Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <CustomModal1
        visible={dotmodalVisible}
        onClose={closeModal}
        close={closeModal}
        deleteMessages={deleteMessages}
      />
    </SafeAreaView>
  );
};

export default Chat;

