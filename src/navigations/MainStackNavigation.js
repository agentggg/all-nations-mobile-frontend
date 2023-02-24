import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  
import Homepage from '../components/Homepage';
import MainTabNavigation from './MainTabNavigation';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

// function DictionaryMainStackNavigation() {
//     return (
//             <Stack.Navigator screenOptions={{headerShown: false}}>
//                 <Stack.Screen name="Search" component={Dictionary} options={{title:"Search", headerStyle: {backgroundColor: 'black'}}}/>
//                 <Stack.Screen name="Word" component={SelectedWord} options={{title:"Word", headerStyle: {backgroundColor: 'black'}}}/>
//                 <Stack.Screen name="Feedback" component={Feedback} options={{title:"Feedback", headerStyle: {backgroundColor: 'black'}}}/>
//             </Stack.Navigator>        
//     )
// }
// function FriendsMainStackNavigation() {
//     return (
//             <Stack.Navigator screenOptions={{headerShown: false}}>
//                 <Stack.Screen name="ManageFriends" component={ManageFriends} options={{title:"Manange Friends", headerStyle: {backgroundColor: 'black'}}}/>
//             </Stack.Navigator>        
//     )
// }
// function DreamsMainStackNavigation() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="DreamEdit" component={DreamEntry}  options={{title:"Jot the Dream", tabBarIcon: ({ color, size }) => (
//                 <Icon name="pencil-outline" color={'black'} size={25}/>)}}/>

//             <Tab.Screen name="DreamVault" component={DreamVault} options={{title:"Vault", unmountOnBlur: true, tabBarIcon: ({ color, size }) => (
//                 <Icon name="lock-closed-outline" color={'black'} size={25}/>)}}/>

//             <Tab.Screen name="DreamFavorites" component={DreamFavorites} options={{title:"Favorites", tabBarIcon: ({ color, size }) => (
//                 <Icon name="bookmark" color={'black'} size={25}/>)}}/>

//             <Tab.Screen name="DreamView" component={DreamView} options={{title:"Dream View",unmountOnBlur: true, tabBarVisible: false, tabBarButton: () => null,}}/>
//             <Tab.Screen name="DreamVaultEdit" component={DreamVaultEdit} options={{title:"Edit Dream", headerStyle: {backgroundColor: 'white'},tabBarVisible: false, tabBarButton: () => null,}}/>

//             <Tab.Screen name="MainTabNavigation" component={MainTabNavigation} options={{unmountOnBlur: true, tabBarStyle: { display: 'none', tabBarVisible: false, headerShown: false}, tabBarIcon: ({ color, size }) => (
//                 <Icon name="home-outline"  size={25}/>)}}/>

//         </Tab.Navigator> 
//     )
// }
// function SharedDreamsStackNavigations() {
//     return (
        
//         <Stack.Navigator>
//             <Stack.Screen name="Shared Home" component={SharedVaultHome} options={{ 
//                 title: 'Shared Vault', headerStyle: {backgroundColor: '#de6262'}, 
//                 }}/>
            
//             {/* <Stack.Screen name="Join Vault Request" component={SharedVaultRequest}/>

//             <Stack.Screen name="Share Vault" component={JoinSharedVault}/>

//             <Stack.Screen name="Shared Vault" component={AccessSharedVault}/> */}

//             {/* <Stack.Screen name="PostReaction" component={PostReaction} options={{title:"Engage", headerStyle: {backgroundColor: 'white'}, StackBarVisible: false, StackBarButton: () => null,}}/> */}


//             {/* <Stack.Screen name="DreamVaultEdit" component={DreamVaultEdit} options={{title:"Edit Dream", headerStyle: {backgroundColor: 'white'},StackBarVisible: false, StackBarButton: () => null,}}/>
//              */}
//         </Stack.Navigator> 
//     )
// }

// DreamEdit



export  {} 