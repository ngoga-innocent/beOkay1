import 'react-native-gesture-handler';
import {
  React,
  useState,
  useEffect
} from 'react'
import {
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  NavigationContainer
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
import MyDrawer from './components/Drawer';
import MyTabs from './components/BottomTabs'





export default function App() {
  const [isAppFirstLaunched, setisAppFirstLaunched] = useState(null);
  useEffect(() => {
    const LoadData = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setisAppFirstLaunched(true)
      } else {
        setisAppFirstLaunched(false)
      }
    }
    LoadData();

  }, [])

  const [authtoken, setAuthToken] = useState('asd')
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer >
        {authtoken ?
          <MyDrawer /> : <Home />}
      </NavigationContainer>
    )

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})