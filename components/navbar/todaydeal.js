import React from "react";
import { StyleSheet , View, Text , Image} from 'react-native';

export default function Todaydeal() {
    return(
    <View style = {style.container}>
        <Text style = {style.text2}>Save upto 75% OFF on Today's Deal</Text>
        <Text style = {style.text}>Shop now
        <Image 
        source={require('../../assets/arrow.png')}
        style = {style.image}
        />
        </Text>
    </View>
    );
}

const style = StyleSheet.create(
    {
        container :{
            backgroundColor : '#5d1982',
            textAlign : 'center',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            height : 47 ,
        },

        text : {
            fontWeight : 'bold',
            fontSize : 20,
            textDecorationLine : 'underline',
            color : 'white',
        },

        text2 : {
            fontSize : 15,
            color : 'white',
        },

        image : {
            width : 25,
            height : 15,
        }
    }
)