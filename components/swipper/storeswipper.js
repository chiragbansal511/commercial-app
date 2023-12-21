import React from "react";
import { View , ImageBackground , Image , StyleSheet} from "react-native";
import Swiper from 'react-native-swiper';
import Stores from "../stores";
const hp = require('../../assets/hp.png');
const boat = require('../../assets/boat.png');
const croma = require('../../assets/croma.png');
export default function Storeswipper()
{
    return (
       <View style={style.container}>
         <Swiper  style={style.swipper}>
        <View style = {style.banner}>
        <Stores brandname={"Hp"} discount={"10"} logo={hp} style={style.banner}/>
        </View>
        <View style = {style.banner}>
        <Stores brandname={"Boat"} discount={"10"} logo={boat} style={style.banner}/>
        </View>
        <View style = {style.banner}>
        <Stores brandname={"croma"} discount={"10"} logo={croma} style={style.banner}/>
        </View>
    </Swiper>
       </View>
    );
}

const style = StyleSheet.create(
    {   
        container : {
           
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            height : 127,   
        },
        
        swipper : {
            justifyContent : "center",
            height : 100,
        },
        
        banner : {
            textAlign : "center",
            height : 90,
        },
    }
)

