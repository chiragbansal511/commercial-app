import React from "react";
import { View , ImageBackground , Image , StyleSheet} from "react-native";
import Swiper from 'react-native-swiper';

export default function Coupenswiper()
{
    return (
        <Swiper  showsButtons={true} autoplay={true} autoplayTimeout={2.5} style={style.swipper}>
        <View style = {style.banner}>
        <ImageBackground source={require('../../assets/banner1.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
        </View>
        <View style = {style.banner} >
        <ImageBackground source={require('../../assets/banner2.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
        </View>
        <View style = {style.banner}>
        <ImageBackground source={require('../../assets/banner3.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
        </View>
        <View style = {style.banner}>
        <ImageBackground source={require('../../assets/banner4.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
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