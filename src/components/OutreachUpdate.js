import { StyleSheet, Text, View, Keyboard, Pressable, TouchableWithoutFeedback, TextInput } from 'react-native'
import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Picker} from '@react-native-picker/picker';
import * as Location from 'expo-location';

const OutreachUpdate = ({navigation}) => {
    const [notes, setNotes] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [location, setLocation] = useState(null)
    const [category, setCategory] = useState('')
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async() => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            let text = 'Waiting..';
            if (errorMsg) {
              text = errorMsg;
            } 
            else if (location) {
              text = JSON.stringify(location);
            }
        })
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);



    const updateContact = async(e) => {

      const postApiData = {
        firstName:firstName, lastName:lastName, phoneNumber:phoneNumber,
        location:location, notes:notes, category:category, saveOption: e
      }
      console.warn(postApiData)
      setNotes(''),setFirstName(''), setLastName(''), setPhoneNumber(''), setCategory('')
        }

    const org = 'RAW' 
    const dataLoaded = ['Guest', 'Family', 'Member', 'Partners']
return (
    <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.greeter}> {org} Outreach Update</Text>
                <TextInput
                    style={styles.fieldData}
                    value={firstName}
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setFirstName(text) 
                    }}
                    placeholder="First name"
                    clearButtonMode="always"
                    returnKeyType="next"
                />
                <TextInput
                    style={styles.fieldData}
                    value={lastName}
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setLastName(text) 
                    }}
                    placeholder="Last name"
                    clearButtonMode="always"
                    returnKeyType="next"
                />
                <TextInput
                    style={styles.fieldData}
                    value={phoneNumber}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setPhoneNumber(text) 
                    }}
                    placeholder="1112223333"
                    clearButtonMode="always"
                    returnKeyType="next"
                />
                <TextInput
                    style={styles.fieldData}
                    value={location}
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setLocation(text) 
                    }}
                    placeholder="Location"
                    clearButtonMode="always"
                    returnKeyType="next"
                />
                <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.fieldDataNotes}
                    value={notes}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setNotes(text) 
                    }}
                    placeholder="Note about contact"
                    clearButtonMode="always"
                    returnKeyType="next"
                />
                <Text style={styles.category}>Select Outreach Category</Text>
                <Picker selectedValue={category} onValueChange={(itemValue, itemIndex) => {
                        setCategory(itemValue);
                    }}>
                    
                    {dataLoaded.map(category=> <Picker.Item key={category} label={category} value={category}/>)}
                </Picker>
                <View style={styles.buttons}>
                    <Pressable onPress={() => updateContact('contactUpdate')} style={styles.OutreachUpdatePressable}><Text style={styles.OutreachUpdateText}>Update</Text></Pressable>
                    <Pressable onPress={() => updateContact('guestUpdate')} style={styles.firstTimePressable}><Text style={styles.firstTimeOutreachUpdate}>Update and Guest</Text></Pressable>
                </View>                   
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
    )
}

export default OutreachUpdate

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        marginTop: '30%', marginBottom: '30%',
        height:'100%'
    },
    greeter:{
        textAlign: 'center',
        alignItems: 'center',
        fontSize: '25%',
        fontWeight: '900',
    },
    fieldData:{
        fontWeight: '200', fontSize: '25%',
        borderWidth: '2%', borderRadius: '30%', borderColor:'#990033',
        paddingTop: '3%', paddingBottom: '3%',
        textAlign: 'center', margin: '5%', 
    },
    fieldDataNotes:{
        fontWeight: '200', fontSize: '25%',
        borderWidth: '2%', borderRadius: '30%', borderColor:'#990033',
        padding: '3%', margin: '3%', 
        textAlign: 'center'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-around', alignContent: 'center', textAlign: 'cetner',
    },
    buttonText:{
        color: 'black',
        fontSize: '40%'
    },
    OutreachUpdatePressable:{
        textAlign: 'center',
        fontSize: '20%',
        borderWidth: "3%", backgroundColor: 'black', borderRadius:'10%',
        padding:'3%',
    },
    firstTimePressable:{
        textAlign: 'center',
        fontSize: '20%',
        borderWidth: "3%", backgroundColor: 'white', borderRadius:'10%',
        padding:'3%',
    },
    OutreachUpdateText:{
        textAlign: 'center',
        color: 'white', fontSize: '20%',
    },
    firstTimeOutreachUpdate:{
        textAlign: 'center',
        color: '#990033', fontSize: '20%',
    },
    category:{
        textAlign: 'center',
        alignItems: 'center',
        fontSize: '25%', marginTop: '20%',
        fontWeight: '900',
    },
})