import React from "react";
import { View , ImageBackground , Image , StyleSheet} from "react-native";
import Swiper from 'react-native-swiper';
import Brandscoupen from "../brandscoupen";

export default function Brandscoupenswipper()
{
    return (
        <Swiper  showsButtons={true}  style={style.swipper}>
        <View style = {style.banner}>
         <Brandscoupen coupen={"acer"} expiredate={1/1/2023} coupencode={"HAPPY2023"} style={style.swipper}/>
        </View>
        <View style = {style.banner} >
         <Brandscoupen coupen={"acer"} expiredate={1/1/2023} coupencode={"HAPPY2023"} style={style.swipper}/>
        </View>
        <View style = {style.banner}>
         <Brandscoupen coupen={"acer"} expiredate={1/1/2023} coupencode={"HAPPY2023"} style={style.swipper}/>
        </View>
        <View style = {style.banner}>
         <Brandscoupen coupen={"acer"} expiredate={1/1/2023} coupencode={"HAPPY2023"} style={style.swipper}/>
        </View>
    </Swiper>
    );
}

const style = StyleSheet.create(
    {
        swipper : {
            display : 'flex',
            justifyContent : 'center',
            alignContent : 'center',
            height : 100,
           
        },

        banner : {
            height : 140,
            width : 411,
            justifyContent : 'center',
           
        },
    }
)

