import React from "react";
import { View , Text , StyleSheet , TouchableOpacity , Image} from "react-native";

export default function Baseiconjoin()
{ 
    return (
      <View style = {style.container}>
      
         <TouchableOpacity activeOpacity={.5} style = {style.icon}>
         <Image
        style={style.image}
        source={require('../../assets/joinicon.png')}
      />
            <Text style = {style.name}>Join</Text>
         </TouchableOpacity>
      </View>
    );
}

const style = StyleSheet.create(
    {
        container : {
            display : 'flex',
            justifyContent : 'center',
            alignContent : 'center',
        },
 
        image : {
         height : 30,
         width : 30,
        }
        
    }
)