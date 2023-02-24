import {SafeAreaView, StyleSheet, Pressable, Text, TouchableOpacity, Alert, View, Image, ScrollView} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { Card } from 'react-native-elements';
import ResponsiveImage from 'react-native-responsive-image';
// import {LinearGradient} from 'expo-linear-gradient';
// import * as Linking from 'expo-linking';
import {PremiumUsers} from '../context/Premium';
import {CollabNotifications} from '../context/CollabNotifications';
// import { Icon } from '@rneui/themed';
// import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import homePageImage from '../assets/homePageImage.png';
import text from '../assets/send_text.jpg';
import register from '../assets/register.jpg';
import outreach_Logo from '../assets/2535_black.jpg';
import firetracker from '../assets/firetracker.png';
import data from '../assets/data.png';


const Homepage = ({navigation}) => {
  const [defaultVerse, setDefaultVerse] = useState("'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.'")
  // const [isPremiumUser, setPremiumUser] = useContext(PremiumUsers)
  const [collabAmount, setCollabAmount] = useState(null)

  const selectedView = (e) => {
    if (!isPremiumUser && e === 'Community' || !isPremiumUser && e === 'Teachings'){
      Alert.alert(
        //title
        'One time cost',
        //body
        'Join the dreamers🤠🤠?',
        [
          { text: 'Yes', onPress: () => console.warn('Yes Pressed')},
          {text: 'No', onPress: () => console.warn('No Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
        //clicking out side of alert will not cancel
      );
    }else{
      navigation.navigate(e)
    }
}
const randomVerseSelection = async()=>{
  try{
      const apiFetch = await axios.get('https://labs.bible.org/api/?passage=random&formatting=plain')
      // API call to get random verse
      const apiData = apiFetch.data
      // retrieving data from API call
      setDefaultVerse(apiData)
      // Destructor array. State update
  }catch(err)
    {
      Alert(err)
    }
} 
  // const donationPage = () => {
  //   Linking.openURL('https://givebutter.com/tech-faith');
  // }


  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', async() => {
  //       const userProfileInfo =  await SecureStore.getItemAsync('userProfile')
  //       const userProfileJson = await JSON.parse(userProfileInfo)
  //       const profileName = await userProfileJson['profile_name']
  //       const collabRequest = await axios.post(`http://10.0.0.212:8000/collab_notification`,{profileName:profileName, sourceView:'notficationNumber'})
  //       setCollabAmount(collabRequest.data)
  //       setCollabNotification(collabRequest.data)
  //   })
  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);
  const name = 'Stevenson'
  const org = 'RAW'
  
  return (    
    <SafeAreaView style={styles.container}>
    <ScrollView>
        <Text style={styles.greeter}>Welcome {name} from {org}</Text>
        <ResponsiveImage style={styles.homePageImage} source={homePageImage} initWidth="355" initHeight="385"/>
        <Text style={styles.randomVerseSelection}>{defaultVerse}</Text>
        <Pressable onPress={() => randomVerseSelection()}><Text style={styles.randomVerseButton}>Show a new verse</Text></Pressable>
        <View style={styles.cardGroup}>
          <Card containerStyle={{ borderColor: '#3B71CA', borderWidth: '4%' }}>
            <ResponsiveImage source={register} initWidth="300" initHeight="238"/>
            <Card.Title style={styles.cardTitle}>Register New Connections</Card.Title>
            <Pressable onPress={() => console.log("register")}><Text style={styles.registerPressable}>Register</Text></Pressable>
          </Card>
          <Card containerStyle={{ borderColor: '#14A44D', borderWidth: '4%' }}>
            <ResponsiveImage source={text} initWidth="300" initHeight="238"/>
            <Card.Title style={styles.cardTitle}>Compose Message To Send</Card.Title>
            <Pressable onPress={() => console.log("text")}><Text style={styles.textPressable}>Compose Message</Text></Pressable>
          </Card>
          <Card containerStyle={{ borderColor: '#DC4C64', borderWidth: '4%' }}>
            <ResponsiveImage source={outreach_Logo} initWidth="300" initHeight="238"/>
            <Card.Title style={styles.cardTitle}>Outreach Registration Form</Card.Title>
            <Pressable onPress={() => console.log("text")}><Text style={styles.outreachPressable}>Outreach Update</Text></Pressable>
          </Card>
          <Card containerStyle={{ borderColor: '#E4A11B', borderWidth: '4%' }}>
            <ResponsiveImage source={firetracker} initWidth="300" initHeight="238"/>
            <Card.Title style={styles.cardTitle}>Map</Card.Title>
            <Pressable onPress={() => console.log("text")}><Text style={styles.fireTrackerPressable}>Fire Tracker</Text></Pressable>
          </Card>
          <Card containerStyle={{ borderColor: '#332D2D', borderWidth: '4%' }}>
            <ResponsiveImage source={firetracker} initWidth="300" initHeight="238"/>
            <Card.Title style={styles.cardTitle}>Database Management</Card.Title>
            <Pressable onPress={() => console.log("text")}><Text style={styles.dataPressable}>Admin</Text></Pressable>
          </Card>
        </View>
        </ScrollView>

      </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container:{
    height: '100%',
    flex: 1,
    marginLeft: '3%',
    marginRight: '3%'
  },
  randomVerseSelection:{
    textAlign: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
    fontSize: '20%',
    fontWeight: '500',
  },
  greeter:{
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '20%',
    fontWeight: '800',
  },
  cardGroup:{
    justifyContent: 'space-between',
  },
  registerPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: "#0d6efd", backgroundColor: '#0d6efd',
    color: 'white', fontSize: '20%',
    marginTop: '5%'
   },
   textPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: "#14A44D", backgroundColor: '#14A44D',
    color: 'white', fontSize: '20%',
    marginTop: '5%'
   },
   outreachPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: "#DC4C64", backgroundColor: '#DC4C64',
    color: 'white', fontSize: '20%',
    marginTop: '5%'
   },
   fireTrackerPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: "#E4A11B", backgroundColor: '#E4A11B',
    color: 'black', fontSize: '20%',
    marginTop: '5%'
   },
   dataPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: "#332D2D", backgroundColor: '#332D2D',
    color: 'black', fontSize: '20%',
    marginTop: '5%'
   },
  cardTitle:{
    fontSize: '20%',
    paddingTop: '5%',
  },
  randomVerseButton:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: "#20232a", backgroundColor: 'black',
    color: 'white', fontSize: '20%',
    marginTop: '5%'
  },
  fullSectionPressable:{
    fontSize: '30%', fontWeight:'500',
    width: '100%',
    paddingLeft:'10%', paddingRight: '10%', paddingTop: '10%', paddingBottom: '10%',
    borderRadius: '20%'
  },
  fullSectionWord:{
    fontWeight:'900',
    color: 'white', 
    fontSize: '30%',
    borderRadius: '20',
  },
  loadingData:{
    alignContent: 'center',
    justifyContent: 'center',
    margin: '20%',
    fontWeight:'900',
    color: 'black', 
    fontSize: '30%',
    borderRadius: '20',
  },
  notificaitionGroup:{
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 0,
    paddingRight:'5%'

  },
  notificaitionNumber:{
    fontSize: '20%',
    fontWeight: '500',
    color: 'white',
  },
})