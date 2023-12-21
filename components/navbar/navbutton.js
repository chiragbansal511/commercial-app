import React from "react";
import {View , Text , TouchableOpacity , Image , StyleSheet , TextInput } from 'react-native';
import { useState } from "react";

export default function Navbutton({onClick}){
     const [Searchtext , setSearchtext] = useState('');
     const [Searchbar , setSearchbar] = useState(false);

        return (
            <View style = {style.container}>
             
             {!Searchbar && <View style = {style.navbarbutton}>
                <TouchableOpacity activeOpacity={.5}
              style = {style.navbarimage}
              onPress={onClick}>
             <Image
             source={require('../../assets/navbutton.png')}
             style = {style.navbarimage}
              ></Image>
              </TouchableOpacity>
                 
              <Image
             style = {style.logo}
             
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
               style = {style.searchbutton}>
             <Image
             source={require('../../assets/searchbar.png')}
             style = {style.searchbuttonimage}
             ></Image>
              </TouchableOpacity>  
            </View>
             );
}

const style = StyleSheet.create(
    {
        container : {    
            backgroundColor : "#7415a2",
            height : 90,
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'center'
        },

        navbarbutton : {
           backgroundColor : "#7415a2",
           height : 90,
           width : 300,
           display : 'flex',
           flexDirection : 'row',
           justifyContent : 'space-evenly',
           alignItems : 'baseline',
           marginLeft : 20,
        },
        
        navbarimage : {
            height : 55,
            width : 55,
            marginLeft : 5,
        },

        logo : {
            height : 70,
            width : 300,
            marginLeft : 20,
        },

        search : {
            backgroundColor : 'white',
            height : 50,
            width : 310,
            marginRight : 10,
            alignSelf : 'center',
            borderRadius : 40
        },
        
        searchbutton : {
            backgroundColor : '#7415a2',
            height : 90,
            width : 40,
            display : 'flex',
            justifyContent : 'center',
        },
        
        searchbuttonimage : {
            height : 45,
            width : 45,
            marginLeft : -10,
        }
    }
)