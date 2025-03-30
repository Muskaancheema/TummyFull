import { useEffect } from "react";
import LoginPage from "./Screens/loginandregister/Login";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterPage from "./Screens/loginandregister/register";

function App(){
    useEffect(() => {
        setTimeout(() =>{
            SplashScreen.hide();
        },900);
    },[]);
    const Stack = createNativeStackNavigator();
    return(
        //  <NavigationContainer>
        //     <Stack.Navigator screenOptions={{
        //         headerShown : false
        //     }}>
        //         <Stack.Screen name="Login" component={LoginPage}/>
        //         <Stack.Screen name="Register" component={RegisterPage}/>
        //     </Stack.Navigator>
        //  </NavigationContainer>
        <RegisterPage />
    );
}
export default App;