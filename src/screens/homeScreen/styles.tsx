import {  StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import { colors } from '../../themes';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.shadyblue,
      },
   
     
      upper: {
        backgroundColor: colors.skyblue,
        height: windowWidth > 400 ? 123 : 100,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderRadius: 1,
        justifyContent:'space-between',
        paddingHorizontal:16
      },
      sub2: {
        color: colors.white,
        fontSize: 13,
        marginBottom: 20,
      },
      location: {
        fontWeight: '500',
        color: colors.white,
        fontSize: 22,
      },
     
      img3: {
        width: 40,
        height: 40,
       marginTop:-55
      },
      lower:{
       backgroundColor:colors.shadyblue,
       flex:1
      },
      input:{
       marginVertical:19,
       marginHorizontal:16,
       backgroundColor:colors.white,
       borderRadius:8,
       paddingLeft:10,
       flexDirection:'row',
      //  justifyContent:'center',
       alignItems:'center',
      },
      nochat:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      nochatimg:{
      width:269,
      height:166
      },
      listCont:{
        flex:1,
        backgroundColor:colors.white,
        borderRadius:8,
        marginHorizontal: 16,
        padding:8,
      },
      flatlist: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: 'lightgray'
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
      noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      noResultsimg: {
        width:269,
          height:166,
          resizeMode:'contain'
      },
  });