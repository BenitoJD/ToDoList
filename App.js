import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PINAuthenticationScreen from './PinAuthenticationScreen';
import ToDoListScreen from './ToDoListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PINAuthentication">
        <Stack.Screen
          name="PINAuthentication"
          component={PINAuthenticationScreen}
        />
        <Stack.Screen name="ToDoList" component={ToDoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
