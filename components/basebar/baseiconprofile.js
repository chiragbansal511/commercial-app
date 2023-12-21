import React from "react";
import { View , Text , StyleSheet , TouchableOpacity , Image} from "react-native";

export default function Baseiconprofile()
{ 
    return (
      <View style = {style.container}>
      
         <TouchableOpacity activeOpacity={.5} style = {style.icon}>
         <Image
        style={style.image}
        source={require('../../assets/profileicon.png')}
      />
            <Text style = {style.name}>Profile</Text>
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
            marginRight : 10,
        },
 
        image : {
         height : 30,
         width : 30,
        }  
    }
)