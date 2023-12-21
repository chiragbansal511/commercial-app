import React from "react";
import { View , Text , Button , StyleSheet} from "react-native";
import Baseiconhome from "./baseiconhome.js";
import Baseicononline from "./baseicononline.js";
import Baseiconofline from "./baseiconofline.js";
import Baseiconjoin from "./baseiconjoin.js";
import Baseiconprofile from "./baseiconprofile.js";

export default function Basebar()
{
    return (
      <View style = {style.container}>
        <Baseiconhome />
         <Baseicononline/>
         <Baseiconofline/>
         <Baseiconjoin/>
         <Baseiconprofile/>
      </View>
    );
}

const style = StyleSheet.create(
    {
        container : {
            display : 'flex',
            flexDirection : 'row',
            backgroundColor : 'white',
            height : 80,
            justifyContent : 'space-between',
        },
    }
)