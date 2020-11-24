import React from 'react';
import {StyleSheet,View, TouchableOpacity, Text} from 'react-native';



export default function Button() {
    return (
        <View style={styles.button}>
        <TouchableOpacity style={styles.buttonIn}>
         <Text style={styles.buttontext}>Next</Text>
         </TouchableOpacity>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'space-around'
      
    
      
    },
    button:{
    
      width:'50%',
      height:50,
      justifyContent:'center',
      alignSelf:'center',
      alignContent:'center',
      alignItems:'center',
      marginTop:20,
      shadowColor: 'azure',
shadowOpacity: 0.8,
elevation: 1,

shadowRadius:3,
      
    
      
  
    },
    buttonIn:{
      
      borderWidth:0,
      height:50,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:30,
      backgroundColor:'mediumpurple'
    },
    buttontext:{
      color:'white',
      fontSize:23,
      fontWeight:'bold'
      
    }
  });
  