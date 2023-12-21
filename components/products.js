import React from "react";
import { View , Text , Button , Image , StyleSheet} from "react-native";


export default function Product({ brandname , productname , initialprice , finalprice , product})
{
    return (
        <View style={style.cointaner}>
        <View style={style.compare}>
        <Text style={style.comparetext}>Compared Prices</Text>
        </View>
      <Image
      source={product} 
      style={style.productimage}></Image>
        <Text style={style.name}>{brandname}</Text>
        <Text style={style.name}>{productname}</Text>
        <View style={style.pricecontainer}>
          <View style={style.price}>
            <Text style={style.final}>${finalprice}</Text>
            <Text style={style.initial}>${initialprice}</Text>
          </View>
          <Button title="Buy Now" ></Button>
        </View>
        </View>
    );
}

const  style = StyleSheet.create(
  {
    cointaner : {
    
       height : 300,
       display : 'flex',
       flexDirection : 'column',
      justifyContent : 'flex-end',
      alignItems : 'center'
    },

    compare : {
      height : 40,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'baseline',
    },
   
    comparetext : {
       fontSize : 15,
       fontWeight : 'bold',
       textDecorationLine : 'underline'
       
    },

   productimage : {
       height : 100,
       width : 300,
   },

   pricecontainer : {
    display : 'flex',
    flexDirection : 'row'
   },

   name : {
    fontSize : 20,
    fontWeight : 'bold',
    color : "grey",
   },

   final : {
      fontWeight : 'bold',
   },

   initial : {
    color : "red" ,
    textDecorationLine : 'line-through'
   },

   price : {
    marginRight : 50
   }
  }
)