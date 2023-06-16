import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { useState } from "react";
import RadioForm from 'react-native-simple-radio-button';

const ParentComponent = ({ navigation }) => {
    const [name, setname] = useState('');
    const [nameError,setnameError] = useState(false)
    const ChangeName = (e) => {
        setname(e)

    }

    const [address, setAddress] = useState('');
    const [addressError,setaddressError] = useState(false)
    const ChangeAddress = (e) => {
        setAddress(e)
    }
    const [gender, setGender] = useState('');
    const [genderError,setgenderError] = useState(false)
    const ChangeGender = (e) => {
        setGender(e)
    }
    const options = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Others', value: 'others' }
    ];
    const [age, setAge] = useState('');
    const [ageError,setageError] = useState(false)
    const ChangeAge = (e) => {
        setAge(e)
    }
    const [hobby, setHobby] = useState('');
    const [hobbyError,sethobbyError] = useState(false)
    const ChangeHobby = (e) => {
        setHobby(e)
    }
    const [phone, setPhoneNo] = useState('');
    const [phoneError,setphoneError] = useState(false)
    const ChangePhone = (e) => {
        setPhoneNo(e)
    }
    const [email, setEmail] = useState('');
    const [emailError,setemailError] = useState(false)
    const ChangeEmail = (e) => {
        setEmail(e)
    }
    const toChild = () => {
        if (!name) {
            setnameError(true);
          } else {
            setnameError(false);
          }
          if (!address) {
            setaddressError(true);
          } else {
            setaddressError(false);
          }
          if (!gender) {
            setgenderError(true);
          } else {
            setgenderError(false);
          }
          if (!age) {
            setageError(true);
          } else {
            setageError(false);
          }
          if (!hobby) {
            sethobbyError(true);
          } else {
            sethobbyError(false);
          }
          if (!phone) {
            setphoneError(true);
          } else {
            setphoneError(false);
          }
          if (!email) {
            setemailError(true);
          } else {
            setemailError(false);
          }
        if (name && address && gender && age && hobby && phone && email) {
            navigation.navigate('Preview', { name, address, gender, age, hobby, phone, email });
        } else {

            Alert.alert('Please fill in all details');
        }
    }
    return (
        <ScrollView>
            <View style={styles.header}>
                <Image source={require('../assets/profile_logo.png')}
                    style={{ height: 50, width: 50, borderWidth: 2 }}
                />
                <Text style={{ marginLeft: 100, fontSize: 25, fontWeight: "bold" }}>Profile</Text>
            </View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>Name</Text>
                <TextInput
                    style={[{ 
                        borderWidth: 1, 
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius:5,
                        backgroundColor: "#FFF8DC",
                     }, 
                     nameError ? { borderColor: 'red' } : {},
                    ]}
                        
                    onChangeText={ChangeName}
                    value={name}
                    keyboardType="default"
                /></View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>Address</Text>
                <TextInput
                    style={[{ 
                        borderWidth: 1, 
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius:5,
                        backgroundColor: "#FFF8DC",
                     }, 
                     addressError ? { borderColor: 'red' } : {},
                    ]}
                    onChangeText={ChangeAddress}
                    value={address}
                    multiline={true}
                /></View>
            <View style={{ flexDirection: "row", margin: 25 }}>
                <Text style={{ marginLeft: 30 }}>Gender</Text>
                <RadioForm
                    style={{ flexDirection: "row", marginLeft: 70 }}
                    radio_props={options}
                    initial={0}
                    onPress={(value) => {
                        setGender(value);
                    }}
                />
            </View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>Age</Text>
                <TextInput
                    style={[{ 
                        borderWidth: 1, 
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius:5,
                        backgroundColor: "#FFF8DC",
                     }, 
                     ageError ? { borderColor: 'red' } : {},
                    ]}
                    onChangeText={ChangeAge}
                    value={age}
                    keyboardType="numeric"

                /></View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>Hobby</Text>
                <TextInput
                    style={[{ 
                        borderWidth: 1, 
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius:5,
                        backgroundColor: "#FFF8DC",
                     }, 
                     hobbyError ? { borderColor: 'red' } : {},
                    ]}
                    onChangeText={ChangeHobby}
                    value={hobby}
                    multiline={true}
                /></View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>PhoneNo</Text>
                <TextInput
                    style={[{ 
                        borderWidth: 1, 
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius:5,
                        backgroundColor: "#FFF8DC",
                     }, 
                     phoneError ? { borderColor: 'red' } : {},
                    ]}
                    onChangeText={ChangePhone}
                    value={phone}
                    keyboardType="numeric"
                /></View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>Email</Text>
                <TextInput
                    style={[{ 
                        borderWidth: 1, 
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius:5,
                        backgroundColor: "#FFF8DC",
                     }, 
                     emailError ? { borderColor: 'red' } : {},
                    ]}
                    onChangeText={ChangeEmail}
                    value={email}
                    multiline={true}
                    keyboardType="email-address"
                /></View>
            <TouchableOpacity
                style={styles.button}
                onPress={toChild}
            >
                <Text style={{ padding: 8 }}>Press Me</Text>
            </TouchableOpacity>
        </ScrollView>
    )


}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 15,
        width: "100%",
        height: 80,
        borderWidth: 2,
        backgroundColor: "#C0C0C0"

    },
    input: {
        width: 200,
        height: 50,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#FFF8DC",
        padding: 10

    },
    button: {
        width: 100,
        height: 40,
        borderColor: "#FF00FF",
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "#DDA0DD",
        marginLeft: 150,
        marginTop: 80,
    }

})

export default ParentComponent;