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
  deleteMessages:()=>void;
}

const CustomModal1: React.FC<CustomModalProps> = ({visible, onClose, close,deleteMessages}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
       >
      <TouchableWithoutFeedback onPress={close}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <TouchableOpacity >
              <View style={styles.listview}>
                <Image source={Icons.eye} />
                <Text style={styles.chattext}>View details</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image  style={styles.delete}source={Icons.unpin} />
                <Text style={styles.chattext}>Unpin chat</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity>
              <View style={styles.listview}>
                <Image source={Icons.search} />
                <Text style={styles.chattext}>Search chat</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineView}></View>
            <TouchableOpacity onPress={deleteMessages}>
              <View style={styles.listview}>
                <Image  style={styles.delete}source={Icons.delete} />
                <Text style={styles.deletetext}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
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
    height: '35%',
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
  delete:{
    height:20,
    width:25,
    resizeMode:'contain'
  },
  deletetext:{
    color:colors.red,
    paddingLeft: 12,
    fontSize: 15,
  }
});

export default CustomModal1;
