import React from "react";
import {View , Text , Button , StyleSheet , ScrollView} from 'react-native';
import Coupenswiper from "../components/swipper/coupens.js";
import Storeswipper from "../components/swipper/storeswipper.js";
import Productswipper from "../components/swipper/productswipper.js";
import Brandscoupenswipper from "../components/swipper/brandscoupenswipper.js";

export default function Home(){

    return (
        <ScrollView style = {style.cointainer}>
            <Coupenswiper/>
            <Text style={style.text}>Top online store</Text>
            <Storeswipper />  
            <Text style={style.text}>Top Offline store</Text>
            <Storeswipper />  
            <Text style={style.text}>Online shopping daily deals</Text>
            <Productswipper />
          <Brandscoupenswipper />
        </ScrollView>
    );
}

const style = StyleSheet.create(
    {
        cointainer : {
           display : 'flex',
           flexDirection  : 'column',
        },

        text : {
            fontSize : 20 , 
            fontWeight : "bold",
            textAlign : "center",
            marginBottom : 10,
        },
    }
)