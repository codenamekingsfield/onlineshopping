
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import profile from './assets/paymentsuccessful.png';
import Button from './components/Button';
import RectangleIndicator from './components/RectangleIndicator';
import RoundIndicator from './components/RoundIndicator';


export default function PaymentSuccessful() {
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
        <Button/>
        <View style={styles.footer}>
          <Text style={styles.previous}>Previous</Text>
           <View style={styles.ind}>
             
             <RoundIndicator/>
             <RoundIndicator/>
             <RectangleIndicator/>
             
           </View>
           <View>
               <Text style={styles.skip}>shhshhh</Text>
           </View>

        </View>

    </View>
          
        


        

        
    


    
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'space-around'
      
    
      
    },
    bold:{
      fontWeight:'800',
      justifyContent:'flex-start',
      fontSize:25,
      marginHorizontal:10,
      marginTop:60
    },
    image:{
      width:300,
      height:200,
      justifyContent:'center',
      alignItems:'center'
      
      
      
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
      }

  });
  
