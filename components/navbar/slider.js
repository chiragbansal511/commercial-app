import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Slider() {
    return (
        <View style={style.container}>
            <Text style={style.earning}> Total Earnings ₹ 0.00</Text>
                <TouchableOpacity activeOpacity={.5} style={style.profileview}>
                    <Image
                        style={style.profileimage}
                        source={require('../../assets/profile.png')}
                    />
                    <Text style={style.profile}>Chirag Bansal</Text>
                </TouchableOpacity>
           
            <Text style={style.links}>Overview</Text>
            <Text style={style.links}>Earnings</Text>
            <Text style={style.links}>Cashback Payment</Text>
            <Text style={style.links}>Cashback Activities</Text>
            <Text style={style.links}>Missing Cashback Claim</Text>
            <Text style={style.links}>Refer & Claim</Text>
            <Text style={style.links}>Share & Claim</Text>
            <Text style={style.links}>Favorites</Text>
            <Text style={style.links}>My QR Code</Text>
            <Text style={style.links}>Account Setting</Text>
            <Text style={style.links}>Log Out</Text>
        </View>
    );
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#7415a2',
            borderTopWidth: 1.5,
            borderColor: 'white',
            display: 'flex',
            flexDirection: 'column',
        },

        earning: {
            alignSelf: 'center',
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
        },

        profileview: {
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            marginBottom : 10,
        },

        profile: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
        },
     
        profileimage : {
            height : 30,
            width : 30,
            marginRight : 10,
        },

        links: {
         fontSize : 20,
         color : 'white',
         fontWeight : '300',
         marginLeft : 10,
        },
    }
)