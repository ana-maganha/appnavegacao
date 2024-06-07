// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from "./views/HomeScreen"
import SobreScreen from "./views/SobreScrenn"
import ContatoScreen from "./views/ContatoScreen"
import ProdutoScreen from "./views/ProdutoScreen"

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                        name="home" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen name="Sobre" component={SobreScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                        name="clipboard-text-multiple-outline" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen name="Produtos" component={ProdutoScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                        name="cart-variant" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen name="Contato" component={ContatoScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                        name="phone-log" color={color} size={size} />
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;