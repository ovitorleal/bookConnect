// 1° Preciso improtar as screens  que vão ficar dentro das minhas rotas.
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Cliente from "./src/screens/Clientes";
import Produto from "./src/screens/Produtos";
import Welcome from "./src/screens/Welcome";


// 2° Criar a navegação em sí.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { SimpleLineIcons } from '@expo/vector-icons';
import Cadastro from "./src/screens/Cadastro";
import { CORES } from "./src/constants/cores";


// 3° Criar a navegação stack
export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name="welcome"
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export const TabNavigate = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                    <SimpleLineIcons name="home" size={24} color="black" />
                ),
                    tabBarActiveTintColor: CORES.COR_PRIMARIA,
                    tabBarInactiveTintColor: 'gray',
                    
                }}
            />

            <Tab.Screen
                name="Cliente"
                component={Cliente}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="user" size={24} color="black" />
                    ),
                    tabBarActiveTintColor: CORES.COR_PRIMARIA,
                    tabBarInactiveTintColor: 'gray',
                    // tabBarBadge:3
                }}
            />

            <Tab.Screen
                name="Produto"
                component={Produto}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="settings" size={24} color="black" />
                    ),
                    tabBarActiveTintColor: CORES.COR_PRIMARIA,
                    tabBarInactiveTintColor: 'gray',
                    // tabBarBadge:3
                }}
            />
        </Tab.Navigator>
    )
}