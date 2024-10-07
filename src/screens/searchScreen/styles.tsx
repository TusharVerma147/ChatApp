import {  StyleSheet,  } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e7edf3',
      
    },
    header: {
      flexDirection: 'row',
    },
    back: {
      height: 48,
      width: 48,
     marginHorizontal:16,
      marginVertical: 19,
    },
    input: {
      flex: 1,
     marginVertical: 19,
      marginRight: 16,
      backgroundColor: 'white',
      borderRadius: 8,
      paddingLeft: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    flatlist: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      paddingVertical: 15,
      borderColor: 'lightgray',
    },
    imageStyle: {
      width: 45,
      height: 45,
      borderRadius: 50,
      marginRight: 10,
      backgroundColor: '#2A7BBB',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: '500',
      color: 'gray',
    },
    textimg: {
      fontWeight: '500',
      color: 'white',
    },
    listCont:{
      flex:1,
      backgroundColor:'white',
      borderRadius:8,
      marginHorizontal: 16,
      padding:8,
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
  