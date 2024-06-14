// 1° Preciso improtar as screens  que vão ficar dentro das minhas rotas.
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Cliente from "./src/screens/Clientes";
import Produto from "./src/screens/Produtos";
import Welcome from "./src/screens/Welcome";
import Cadastro from "./src/screens/Cadastro";
import Download from "./src/screens/Download";
import ContinueLendo from "./src/screens/ContinueLendo";
import Configuracoes from "./src/screens/Configuracoes";

// 2° Criar a navegação em sí.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { SimpleLineIcons } from '@expo/vector-icons';

import { CORES } from "./src/constants/cores";


// 3° Criar a navegação stack
export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name="Welcome"
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
            <Stack.Screen
                name="Home"
                component={TabNavigate}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export const TabNavigate = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#1a1a1a', 
                     paddingTop: 10, borderTopColor: '#1a1a1a' },
                tabBarActiveTintColor: CORES.COR_PRIMARIA,
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: { fontSize: 11}
                
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="home" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Continue lendo"
                component={Cliente}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="book-open" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />

              <Tab.Screen
                name="Downloads"
                component={Download}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="cloud-download" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            /> 

            <Tab.Screen
                name="Configurações"
                component={Produto}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="settings" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
};