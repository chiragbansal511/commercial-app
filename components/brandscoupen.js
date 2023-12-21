import React from "react";
import { View , Text , Button , Image ,Clipboard , StyleSheet } from "react-native";
import { useState } from "react";

export default function Brandscoupen({coupen , expiredate , coupencode ,barndslogo})
{
     const [Showcode , setShowcode] = useState(false);

     function showcodechanger()
     {
        setShowcode(!Showcode);
     }

    return (
      <View style={style.main}>
        <Image
        source = {barndslogo}></Image>
        <Text style={style.name}>{coupen}</Text>
        {!Showcode && <Button style={style.show} title="Show Code" onPress={showcodechanger}></Button>}
        {Showcode && <View>
            <Text style={style.code}>{coupencode}</Text>
            <Button title="Copy Code" onPress={()=>{Clipboard.setString(coupencode)}}></Button>
            </View>}
      </View>   

    );
}

const style = StyleSheet.create(
  {
  name :{
       fontSize : 25,
       textAlign : "center",
       fontWeight : 'bold',
  },

  code : {
    fontSize : 15,
    fontWeight : 'bold',
    textAlign : "center"
  },

  main : {
    marginBottom : 50
  }
  }
)