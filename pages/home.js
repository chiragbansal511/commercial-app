import React from "react";
import {View , Text , Button , StyleSheet} from 'react-native';
import Navbar from "../components/navbar/navbar.js";
import Basebar from "../components/basebar/basebar.js";
import Coupenswiper from "../components/swipper/coupens.js";

export default function Home(){
    return (
        <View style = {style.cointainer}>
            <Navbar style = {style.ele}/>
            <Coupenswiper/>
            <Basebar style = {style.ele}/>
        </View>
    );
}

const style = StyleSheet.create(
    {
        cointainer : {
            display : 'flex',
            flexDirection : 'column',
            height : 780,
           justifyContent : 'center',
           alignContent : 'center'
        },
      
    }
)