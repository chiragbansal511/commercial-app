import React from "react";
import { View , Text , StyleSheet , TouchableOpacity , Image} from "react-native";

export default function Baseiconofline()
{ 
    return (
      <View style = {style.container}>
      
         <TouchableOpacity activeOpacity={.5} style = {style.text}>
         <Image
        style={style.tinyLogo}
        source={require('../../assets/oflineicon.png')}
      />
            <Text style = {style.text}>Offline</Text>
         </TouchableOpacity>
      </View>
    );
}

const style = StyleSheet.create(
    {
        container : {
            backgroundColor : 'white',
            width : 80,
            display : 'flex',
            justifyContent : 'center'
        },

        text : {
            color : 'black',
            fontSize : 15,
            textAlign : 'center',
            
        },

        tinyLogo : {
            height : 30,
            width : 30,
            alignSelf : 'center'
        }
        
    }
)