import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../components/Homepage';
import MainTabNavigation from './MainTabNavigation';

const Stack = createStackNavigator()

function MainStackNavigation() {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Homepage" component={Homepage} options={{title:"Home", headerStyle: {backgroundColor: 'black'}}}/>
                <Stack.Screen name="Register" component={MainTabNavigation} options={{title:"Home", headerStyle: {backgroundColor: 'black'}}}/>
                {/* <Stack.Screen name="OutreachUpdate" component={MainTabNavigation} options={{title:"Home", headerStyle: {backgroundColor: 'black'}}}/> */}
            </Stack.Navigator>        
    )
}





export  default MainStackNavigation