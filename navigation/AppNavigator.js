import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AnimationScreen from "../screens/AnimationScreen";

const Stack = createStackNavigator();
const AppNavigator= () =>(
  <NavigationContainer>
  <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name='Animate' component={AnimationScreen}/>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Register' component={RegisterScreen}/>
  </Stack.Navigator>
  </NavigationContainer>
);
export default AppNavigator;