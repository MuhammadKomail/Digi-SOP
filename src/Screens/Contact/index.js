import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
import COLORS from '../../Assets/Style/Color';
const Contact = () => {

    const [name, setName] = React.useState('');
    const [lname, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [site, setSite] = React.useState('');
    const [issue, setIssue] = React.useState('');
    const [value, setValue] = React.useState('');

    const handleSubmit = () => {
        // handle form submission here
    };

    return (
        // <SafeAreaView>
        <ScrollView style={{ flex: 1 ,marginBottom:50}}>
            <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
                <View style={styles.headerBox}>
                    <Image style={styles.imgStyle} source={require("../../Assets/Images/contact/contact.png")}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.box}>
                    <TextInput
                        label="firstName"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                    <TextInput
                        label="LastName"
                        value={lname}
                        onChangeText={setLName}
                        style={styles.input}
                    />
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        keyboardType="email-address"
                    />
                    <TextInput
                        label="Mobile No"
                        value={mobile}
                        onChangeText={setMobile}
                        style={styles.input}
                        secureTextEntry
                    />
                    <TextInput
                        label="Site"
                        value={site}
                        onChangeText={setSite}
                        style={styles.input}
                    />
                    <TextInput
                        label="Issue"
                        value={issue}
                        onChangeText={setIssue}
                        style={styles.input}
                    />
                    <TextInput
                        label="Type your message here"
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        multiline
                        numberOfLines={5}
                        style={styles.textInput}
                    />
                    <Button style={{ backgroundColor: "black", color: COLORS.white, width: "85%", marginTop: "4%" }} onPress={handleSubmit}>
                        Submit
                    </Button>
                </View>
                <View>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#f6f6f6"
    },
    imgStyle: {
        height: 100,
        width: "60%",
        borderRadius: 50
    },
    box: {
        height: 650,
        width: "100%",
        backgroundColor: "#f0eef3",
        marginTop: "5%",
        borderRadius: 55,
        paddingLeft: "13%",
        paddingTop: "6%"
    },
    input: {
        marginBottom: 16,
        height: 50,
        backgroundColor: "#fff",
        width: "85%"
    },
    textInput: {
        backgroundColor: "#fff",
        width: "85%",
        height: 120
    }
});

export default Contact