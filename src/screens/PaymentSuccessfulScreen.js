
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import profile from '../../assets/onlineshopping1.png';
import Button from '../components/Button';
import RectangleIndicator from '../components/RectangleIndicator';
import RoundIndicator from '../components/RoundIndicator';

export default function PaymentSuccessful({navigation}) {
  return (
    <View style={styles.container}>
        <View>
           <Text style={styles.bold} >PAYMENT SUCCESSFUL</Text>
           <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dictum ligula.
             Vestibulum imperdiet viverra faucibus. Curabitur elementum 
              risus at neque tempus interdum. Sed nec orci eros. Fusce dignissim scelerisque condimentum. 
             In euismod dictum dui, nec ullamcorper sapien blandit et.</Text>
      </View>
      
        <Image source={profile} style={styles.image}/>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("PaymentSuccessful")
        }} style={styles.buttonIn}>
         <Text style={styles.buttontext}>GET STARTED</Text>
         </TouchableOpacity>
      </View>
        <View style={styles.footer}>

        <TouchableOpacity onPress={()=>{
          navigation.navigate("AddToCart")
        }} style>
         <Text style={styles.previous}>Previous</Text>
         </TouchableOpacity>

           <View style={styles.ind}>
             
             <RoundIndicator/>
             <RoundIndicator/>
             <RectangleIndicator/>
             
           </View>
           <View>
               <Text style={styles.skip}>        </Text>
           </View>

        </View>

    </View>
          
        


        

        
    


    
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'space-around',
      backgroundColor:'white'
      
    
      
    },
    bold:{
      fontWeight:'800',
      justifyContent:'flex-start',
      fontSize:25,
      marginHorizontal:10,
      
    },
    image:{
      width:300,
      height:200,
      justifyContent:'center',
      alignSelf:'center'
      
      
      
    },
    paragraph:{
      marginHorizontal:10,
      fontSize:17,
      padding: 5,
    },
    footer: {
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: "center"
      },
      ind: {
        flexDirection: "row",
        alignItems: "center",
        marginRight:10
    
      },
      skip:{
          fontSize:20,
          marginRight:10,
          color:'white'
      },
      previous:{
          fontSize:20,
          marginLeft:10,
          color:'gray'
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
  
