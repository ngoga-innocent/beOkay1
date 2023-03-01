import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../screens/loginScreens/Login';
import ConsultationStack from '../screens/ConsultationScreens/ConsultationStack';
import Consultation from '../screens/ConsultationScreens/Consultation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from './Colors';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'consultation') {
                        iconName = focused ? 'stethoscope' : 'stethoscope';
                    }
                    else if (route.name === 'user') {
                        iconName = focused ? 'user-clock' : 'user-clock';
                    }
                    else if (route.name === 'emergency') {
                        iconName = focused ? 'star-of-life' : 'star-of-life';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={ConsultationStack} options={{ headerShown: false }} />
            <Tab.Screen name="consultation" component={Consultation} options={{ headerShown: false }} />
            <Tab.Screen name="user" component={ConsultationStack} options={{ headerShown: false }} />
            <Tab.Screen name="emergency" component={ConsultationStack} options={{ headerShown: false }} />

        </Tab.Navigator>

    );
}
export default MyTabs;