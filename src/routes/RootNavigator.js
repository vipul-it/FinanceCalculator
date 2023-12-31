import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screen/SplashScreen';
import Dashboard from '../screen/Dashboard';
import Emicalculator from '../screen/Emicalculator';
import OtherCalculator from '../screen/OtherCalculator';
import PrePayments from '../screen/PrePayments';
import History from '../screen/History';
import EmiHistory from '../screen/EmiHistory';
import CompareLoan from '../screen/CompareLoan';
import ChangeCurrency from '../screen/ChangeCurrency';
import FindBank from '../screen/FindBank';
import FindAtm from '../screen/FindAtm';
import MenuBar from '../screen/common/MenuBar';

 const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Emicalculator"
          component={Emicalculator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtherCalculator"
          component={OtherCalculator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrePayments"
          component={PrePayments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="EmiHistory"
          component={EmiHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompareLoan"
          component={CompareLoan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangeCurrency"
          component={ChangeCurrency}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindBank"
          component={FindBank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindAtm"
          component={FindAtm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuBar"
          component={MenuBar}
          options={{headerShown: false}}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};

export default RootNavigator;
