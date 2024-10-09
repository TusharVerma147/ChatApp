import {StyleSheet} from 'react-native';
import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: 10,
    borderBottomStartRadius: 18,
    borderBottomEndRadius: 18,
  },
  upper1: {
    flexDirection: 'row',
  },
  back: {
    height: 48,
    width: 48,
  },
  profileimg: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: colors.skyblue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimgtext: {
    color: colors.white,
    fontWeight: 'bold',
  },
  nametext: {
    fontWeight: '700',
    color:colors.black,
    fontSize: 20,
  },
  clocked: {
    color: 'grey',
  },
  more: {
    marginTop: -10,
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  giftedview: {backgroundColor: colors.shadyblue, flex: 1,paddingTop:10 },

  textinputstyle: {
    borderRadius: 8,
    flex:1,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.modalText,
    paddingHorizontal: 10,
    marginTop:8,
    paddingVertical:15
  } ,
  containerStyle: {
    paddingVertical: 10,
    // backgroundColor:'#fffaf0'
  },
  msgContainer:{
   marginVertical:3,
   marginRight:5
  },
  add: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginVertical: 5,
    backgroundColor: colors.gray,
    borderRadius: 50,
  },
  send: {
    width: 30,
    height: 30,
  },
  sendCont: {
    marginRight:10 ,
    alignItems:'flex-end',
    // marginBottom: 10,
    justifyContent:'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    height: '60%',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  emojiList: {
    marginBottom: 20,
  },
  emoji: {
    fontSize: 30,
    marginHorizontal: 23,
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
  delete: {
    height: 20,
    width: 25,
    resizeMode: 'contain',
  },
  deletetext: {
    color: 'red',
    paddingLeft: 12,
    fontSize: 15,
  },
  reactionContainer: {
    backgroundColor: colors.react,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 360,
    paddingVertical:5 ,
    // paddingHorizontal:5,
    marginTop: -5,
    borderRadius: 20,
    marginRight: 23,
    // marginBottom: 5,
  },
  reactionEmoji: {
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  modalContainer1: {
    width: 346,
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  accountText: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: colors.account
  },
  modalText: {
    color: colors.modalText,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 6,
    marginBottom: 28,
  },
  primaryCont: {
    backgroundColor: colors.buttoncolor,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  primaryCont1: {
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  primary: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  primary1: {
    color: colors.outerspace,
    fontWeight: '600',
    fontSize: 14,
  },
  deleteiconview: {
    backgroundColor: colors.lightred,
    borderRadius: 80,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
