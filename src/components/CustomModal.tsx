import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Icons from '../assets';
import { colors } from '../themes';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  close: () => void;
  newchat:() => void;
}

const CustomModal: React.FC<CustomModalProps> = ({visible, onClose, close,newchat}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={close}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={newchat}>
              <View style={styles.listview}>
                <Image source={Icons.circleplus} />
                <Text style={styles.chattext}>New Chat</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image source={Icons.users} />
                <Text style={styles.chattext}>New Group Chat</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image source={Icons.louds} />
                <Text style={styles.chattext}>New Announcement</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.transparent
  },
  modalContent: {
    borderRadius: 20,
    height: '30%',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: colors.white
  },
  listview: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  lineView: {
    borderBottomWidth: 0.5,
    marginHorizontal: 24,
    marginVertical: 24,
  },
  chattext: {
    paddingLeft: 12,
    color: colors.blue,
    fontSize: 15,
  },
});

export default CustomModal;
