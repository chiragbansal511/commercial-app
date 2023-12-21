import React from "react";
import { View , Text , StyleSheet , TouchableOpacity , Image} from "react-native";

export default function Baseiconhome()
{ 
    return (
      <View style = {style.container}>
      
         <TouchableOpacity activeOpacity={.5} style = {style.icon} on>
         <Image
        style={style.image}
        source={require('../../assets/homeicon.png')}
      />
            <Text style = {style.name}>Home</Text>
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
           marginLeft : 10,
       },

       image : {
        height : 30,
        width : 30,
       }
    }
)