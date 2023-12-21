import React from "react";
import {StyleSheet , View, Text, Button } from 'react-native';
import Todaydeal from "./todaydeal.js";
import Navbutton from "./navbutton.js";
import Slider from "./slider.js";
import { useState } from "react";

export default function Navbar() {

    const [Slide , setSlide] = useState(false);

    function slider()
    {
        setSlide(!Slide);
    }

    return (
        <View >
            <Todaydeal />
            <Navbutton  onClick={slider}/>
            {Slide && <Slider/>}
        </View>
    );
}
