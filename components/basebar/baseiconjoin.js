import React from "react";
import { View , Text , StyleSheet , TouchableOpacity , Image} from "react-native";

export default function Baseiconjoin()
{ 
    return (
      <View style = {style.container}>
      
         <TouchableOpacity activeOpacity={.5} style = {style.text}>
         <Image
        style={style.tinyLogo}
        source={require('../../assets/joinicon.png')}
      />
            <Text style = {style.text}>Join</Text>
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