import React from "react";
import {StyleSheet , View, Text, Button } from 'react-native';
import Todaydeal from "./todaydeal.js";
import Navbutton from "./navbutton.js";

export default function Navbar() {
    return (
        <View >
            <Todaydeal />
            <Navbutton />
        </View>
    );
}

const style = StyleSheet.create(
   {
    container1 : {
        
        
    },
    container2 :{
       
    }
   }
)