import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../components/Homepage';
import Register from '../components/Register';
import OutreachUpdate from '../components/OutreachUpdate';

// import LoginView from '../components/Authenticate/LoginView';
// import CreateAccount from '../components/Authenticate/CreateAccount';
// import { LoginStatus } from '../context/LoginStatus';
// import { PremiumUsers } from '../context/Premium';
// import {DictionaryMainStackNavigation, CommunityMainStackNavigation, DreamsMainStackNavigation,  FriendsMainStackNavigation, SharedDreamsStackNavigations} from './MainStackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';  


const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
    return (
        
        <Tab.Navigator screenOptions={{headerShown: false}}> 
            <Tab.Screen name="Homepage" component={Homepage} options={{display: 'none', title:"Home", tabBarVisible: false, tabBarIcon: ({ color, size }) => (
                <Icon name="home-outline" color={'black'} size={25}/>)}}/> 
            <Tab.Screen name="OutreachUpdate" component={OutreachUpdate} options={{title:"Outreach", tabBarIcon: ({ color, size }) => (
                <Icon name="people-outline" color={'black'} size={25}/>)}}/>  
            <Tab.Screen name="Register" component={Register} options={{title:"Register", tabBarIcon: ({ color, size }) => (
                <Icon name="create-outline" color={'black'} size={25}/>)}}/>  
        </Tab.Navigator>
            )

    }
export default MainTabNavigation