import React from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Stores({ brandname, discount, logo }) {
    return (
        <TouchableOpacity activeOpacity={.5} style={style.container}>
            <Image
                style={style.image}
                source={logo}
                resizeMode="contain"></Image>
            <View style={style.text}>
                <Text style={style.brandname}>{brandname}</Text>
                <Text style={style.discount}>Upto {discount}% Cashback</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#c4bebe',
            display: 'flex',
            flexDirection: 'row',
            height: 90,
           
            borderRadius: 30,
            borderColor: "#a8a5a5",
            borderWidth: 2,
            justifyContent : 'space-evenly',
            alignItems : 'center',
        },

        image: {
            height: 60,
            width: 60,
            borderRadius: 30,
        },

        text: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent : 'center',
            alignItems : 'center',
        },

        brandname: {
            fontSize: 30,
            fontWeight: 'bold',
        },

        discount: {
            fontSize: 15,
            fontWeight: '400',
        },
    }
)