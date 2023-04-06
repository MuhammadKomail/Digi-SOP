import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const Demo = () => {

    const lessthan = "<";

    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <View style={styles.parentView}>
                    <Text style={styles.textOne}>{lessthan}</Text>
                    <Text style={styles.textTwo}>Digital-SOP Title</Text>
                    <Text style={styles.textThree}>Report</Text>
                </View>
                <View style={styles.imageCont}>
                    <Image style={styles.imageStyle} resizeMode={'contain'} source={require("../../Assets/Images/Demo/living-room-plants.png")}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <Text style={{ color: "gray", fontSize: 12, marginTop: 5, marginLeft: "2%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil amet rerum, eum nemo explicabo. Labore amet excepturi perspiciatis explicabo praesentium magnam facere natus hic.</Text>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "9%" }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <Text style={{ color: "gray", fontSize: 12, marginTop: 5, marginLeft: "2%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil amet rerum, eum nemo explicabo. Labore amet excepturi perspiciatis explicabo praesentium magnam facere natus hic.</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "9%" }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <Text style={{ color: "gray", fontSize: 12, marginTop: 5, marginLeft: "2%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil amet rerum, eum nemo explicabo. Labore amet excepturi perspiciatis explicabo praesentium magnam facere natus hic.</Text>
                </View>

                <View style={styles.btnCont}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    parentView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "10%"
    },
    textOne: {
        color: "black",
        fontSize: 25
    },
    textTwo: {
        color: "black",
        fontSize: 20,
        marginTop: ".5%"
    },
    textThree: {
        color: "blue",
        fontSize: 14,
        marginTop: "1.5%"
    },
    imageCont: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "2%"
    },
    imageStyle: {
        height: 270,
        width: "95%"
    },
    btnCont: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "7%",
        marginBottom: 15
    },
    btn: {
        backgroundColor: "black",
        color: "white",
        paddingRight: "30%",
        paddingLeft: "30%",
        borderRadius: 6,
        paddingTop: "2.4%",
        paddingBottom: "2.4%",
    }
});