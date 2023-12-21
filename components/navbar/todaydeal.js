import React from "react";
import { StyleSheet , View, Text , Image} from 'react-native';

export default function Todaydeal() {
    return(
    <View style = {style.container}>
        <Text style = {style.deal}>Save upto 75% OFF on Today's Deal</Text>
        <Text style = {style.shop}>Shop now
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
            height : 90,
            backgroundColor : '#5d1982',
            textAlign : 'center',
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'flex-end',
            alignItems : 'center',
        },

        shop : {
            fontWeight : 'bold',
            fontSize : 20,
            textDecorationLine : 'underline',
            color : 'white',
        },

        deal : {
            fontSize : 15,
            color : 'white',
            justifyContent : 'flex-end'
        },

        image : {
            width : 25,
            height : 15,
        }
    }
)