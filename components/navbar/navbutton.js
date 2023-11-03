import React from "react";
import {View , Text , TouchableOpacity , Image , StyleSheet , TextInput} from 'react-native';
import { useState } from "react";

export default function Navbutton(){
     const [Searchtext , setSearchtext] = useState('');
     const [Searchbar , setSearchbar] = useState(false);

        return (
            <View style = {style.container1}>
             
             {!Searchbar && <View style = {style.container3}>
                <TouchableOpacity activeOpacity={.5}
              style = {style.container}>
             <Image
             source={require('../../assets/navbutton.png')}
             style = {style.container}
              ></Image>
              </TouchableOpacity>

              <Image
             source={require('../../assets/logo.png')}
             style = {style.text}
              ></Image>
             
                </View>
              }

              {Searchbar && <TextInput 
             placeholder="Type here"
             onChangeText={(text) => setSearchtext(text)}
             value={Searchtext}
             style = {style.search}
             ></TextInput>}
             

<TouchableOpacity activeOpacity={.5}
               onPress={()=>{setSearchbar(!Searchbar)}}
               style = {style.container}>
             <Image
             source={require('../../assets/searchbar.png')}
             style = {style.container}
             ></Image>
              </TouchableOpacity>  
            </View>
             );
}

const style = StyleSheet.create(
    {
        container : {
            width : 60,
            height : 60,
        },
        container1 :
        {
            backgroundColor : '#7415a2',
            display : 'flex',
            flexDirection : 'row',
            height : 100,
            justifyContent : 'space-between',
           alignItems : 'center',
        }, 

        container2 : {
            backgroundColor : '#7415a2',
            display : 'flex',
            flexDirection : 'row',
            height : 100,
            justifyContent : 'space-between',
           alignItems : 'center',
        },

        container3 :{
            width : 250,
             display : 'flex',
             flexDirection : 'row',
            justifyContent : 'space-between',
            alignItems : 'center'
        },

        text : {
            width : 325,
            height : 60,
           
        },

        search : {
           backgroundColor : 'white',
           height : 50,
           width : 300,
           borderRadius : 30,
           fontSize : 15,
           fontWeight : 'bold',
           marginLeft : 25,
        },
    }
)