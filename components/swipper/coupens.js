import React from "react";
import { View, ImageBackground, Image, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';

export default function Coupenswiper() {
    return (
            <View containerStyle={style.container}>
                <Swiper showsButtons={true} autoplay={true} autoplayTimeout={2.5} style={style.swipper} containerStyle={style.container}>
                <View containerStyle={style.banner}>
                    <ImageBackground source={require('../../assets/banner1.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
                </View>
                <View containerStyle={style.banner} >
                    <ImageBackground source={require('../../assets/banner2.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
                </View>
                <View containerStyle={style.banner}>
                    <ImageBackground source={require('../../assets/banner3.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
                </View>
                <View containerStyle={style.banner}>
                    <ImageBackground source={require('../../assets/banner4.jpg')} resizeMode="contain" style={style.banner}></ImageBackground>
                </View>
            </Swiper>
            </View>
       
    );
}

const style = StyleSheet.create(
    {
        container : {
            height : 130,
            borderRadius : 20,
        },

        swipper: {
            display: 'flex',
            height: 150,
        },

        banner: {

            height: 100,
          
        },
    }
)

