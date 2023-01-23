import { SafeAreaView, StatusBar } from "react-native";
import { Text, Button } from "react-native-elements";
import { useTheme } from "../hooks";
import  {AuthNavigation}  from "./AuthNavigation";
import  {AppNavigation}  from "./AppNavigation";

export function RootNavigation(){
    const {darkMode, toggleTheme} = useTheme();
    const auth = null;
    return (
        <>
            <StatusBar animated barStyle={darkMode?"light-content":"dark-content"} />
            { auth ? <AppNavigation /> : <AuthNavigation /> }
            {/* <SafeAreaView>
                <Text>Niels</Text>
                <Text>Estamos en {darkMode?"Dark Mode":"Light Mode"} </Text>
                <Button title={ darkMode ? "Activar LightMode" : "Activar DarkMode" } onPress={toggleTheme} />
                <Text>Estamos en {darkMode?"Dark Mode":"Light Mode"} </Text>
            </SafeAreaView> */}
        </>
    );
    
}