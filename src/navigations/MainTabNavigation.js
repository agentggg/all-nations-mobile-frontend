import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import Homepage from '../components/Homepage';
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
            <Tab.Screen name="Homepage" component={Homepage} options={{ tabBarStyle: { display: 'none', tabBarVisible: false }}}/>   
        </Tab.Navigator>
            )

    }
export default MainTabNavigation