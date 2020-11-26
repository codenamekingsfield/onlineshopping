
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import profile from '../../assets/addtocart.png';
import Button from '../components/Button';
import RectangleIndicator from '../components/RectangleIndicator';
import RoundIndicator from '../components/RoundIndicator';


export default function AddToCartScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View>
           <Text style={styles.bold} >ADD TO CART</Text>
           <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dictum ligula.
             Vestibulum imperdiet viverra faucibus. Curabitur elementum 
              risus at neque tempus interdum. Sed nec orci eros. Fusce dignissim scelerisque condimentum. 
             In euismod dictum dui, nec ullamcorper sapien blandit et.</Text>
      </View>
      
        <Image source={profile} style={styles.image}/>
        <Button navigation={navigation}/>
        <View style={styles.footer}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("OnlineShopping")
        }} style>
         <Text style={styles.previous}>Previous</Text>
         </TouchableOpacity>
           <View style={styles.ind}>
             
             <RoundIndicator/>
             <RectangleIndicator/>
             <RoundIndicator/>
           </View>
           <View>
           <TouchableOpacity onPress={()=>{
          navigation.navigate("PaymentSuccessful")
        }} style>
         <Text style={styles.skip}>skip  </Text>
         </TouchableOpacity>
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
      marginHorizontal:10
    },
    image:{
      width:300,
      height:200,
      alignSelf:'center'      
    },
    paragraph:{
      marginHorizontal:10,
      fontSize:17,
      padding: 5,
    },
    footer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
      },
      ind: {
        flexDirection: "row",
        alignSelf:'center'
      },
      skip:{
          fontSize:20,
          marginRight:10,
          color:'gray'
      },
      previous:{
          fontSize:20,
          marginLeft:10,
          color:'gray'
      }

  });
  
