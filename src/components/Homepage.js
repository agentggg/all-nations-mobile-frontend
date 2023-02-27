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
import admin from '../assets/admin.png';


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
          <View>
            <View style={styles.cardGroup}>
              <ResponsiveImage source={register} initWidth="360" initHeight="238" style={styles.registerImage}/>
            </View>
            <Pressable onPress={() => navigation.navigate('Register')}><Text style={styles.registerPressable}>Register</Text></Pressable>

            <View style={styles.cardGroup}>
              <ResponsiveImage source={text} initWidth="365" initHeight="238" style={styles.textImage}/>
            </View>
            <Pressable onPress={() => console.log("text")}><Text style={styles.textPressable}>Compose Message</Text></Pressable>

            <View style={styles.cardGroup}>
              <ResponsiveImage source={outreach_Logo} initWidth="365" initHeight="238" style={styles.outreachImage}/>
            </View>
            <Pressable onPress={() => navigation.navigate("OutreachUpdate")}><Text style={styles.outreachPressable}>Outreach Update</Text></Pressable>

            <View style={styles.cardGroup}>
              <ResponsiveImage source={firetracker} initWidth="365" initHeight="238" style={styles.fireTrackerImage}/>
            </View>
            <Pressable onPress={() => console.log("text")}><Text style={styles.fireTrackerPressable}>Fire Tracker</Text></Pressable>

            <View style={styles.cardGroup}>
              <ResponsiveImage source={admin} initWidth="365" initHeight="238" style={styles.adminImage}/>
            </View>
            <Pressable onPress={() => console.log("text")}><Text style={styles.adminPressable}>Admin</Text></Pressable> 
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
    marginRight: '3%',
    justifyContent: 'space-between', alignContent:'center'
  },
  greeter:{
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '25%',
    fontWeight: '900',
  },
  randomVerseSelection:{
    textAlign: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
    fontSize: '20%',
    fontWeight: '500',
  },
  randomVerseButton:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", backgroundColor: 'white', borderColor: 'black',
    color: 'black', fontSize: '20%',
    marginBottom: '5%', marginTop: '10%',
  },
  cardGroup:{
    borderWidth: "3%", borderColor: '#34090C'
  },
  registerPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: '#34090C', backgroundColor: '#34090C',
    color: 'white', fontSize: '20%',
    marginBottom: '5%'
  },
  textPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: '#34090C', backgroundColor: '#34090C',
    color: 'white', fontSize: '20%',
    marginBottom: '5%'
  },
  outreachPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: '#34090C', backgroundColor: '#34090C',
    color: 'white', fontSize: '20%',
    marginBottom: '5%'
  },
  fireTrackerPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: '#34090C', backgroundColor: '#34090C',
    color: 'white', fontSize: '20%',
    marginBottom: '5%'
  },
  adminPressable:{
    textAlign: 'center',
    padding: '3%',
    borderWidth: "3%", borderColor: '#34090C', backgroundColor: '#34090C',
    color: 'white', fontSize: '20%',
    marginBottom: '5%'
  },
  registerImage:{
    alignItems: 'center', justifyContent: 'center', alignContent: 'center',
    color: 'white', fontSize: '20%',
    marginBottom: '8%'
  },
  textImage:{
    alignItems: 'center', justifyContent: 'center', alignContent: 'center',
    color: 'white', fontSize: '20%',
    marginBottom: '8%'
  },
  outreachImage:{
    textAlign: 'center',
    color: 'white', fontSize: '20%',
    marginBottom: '8%'
  },
  fireTrackerImage:{
    textAlign: 'center',
    color: 'black', fontSize: '20%',
    marginBottom: '8%'
  },
  adminImage:{
    textAlign: 'center',
    color: 'white', fontSize: '20%',
    marginBottom: '8%'
  }
})