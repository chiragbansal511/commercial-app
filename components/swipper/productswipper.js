import React from "react";
import { View , StyleSheet} from "react-native";
import Swiper from 'react-native-swiper'
import Product from "../products";
const oneplus = require('../../assets/oneplus.jpg');
const shoes = require('../../assets/adidasshoes.png')
export default function Productswipper()
{
    return (
     <View style={style.container}>
           <Swiper  showsButtons={true}  style={style.swipper}>
        <View style = {style.banner}>
        <Product brandname={"Oneplus"} productname={"Earbuds"} initialprice={"10000"} finalprice={"7500"} product={oneplus} style={style.banner}/>
        </View>
        <View style = {style.banner}>
        <Product brandname={"Addidas"} productname={"Shoes"} initialprice={"10000"} finalprice={"7500"} product={shoes} style={style.banner}/>
        </View>
    </Swiper>
     </View>
    );
}

const style = StyleSheet.create(
    {
        container : {
           height : 250,
           display : 'flex',
           justifyContent : 'center',
           alignItems : 'center'
        },

        swipper : {
            display : 'flex',
            justifyContent : 'center',
            alignContent : 'center',
            height : 250,
           
        },

        banner : {
            height : 140,
            justifyContent : 'center',
           
        },
    }
)

