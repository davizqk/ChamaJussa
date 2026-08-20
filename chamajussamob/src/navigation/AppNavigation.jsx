import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login/Login';
import ListaOS from '../pages/OS/ListarOS/ListarOS';
import CriarOS from '../pages/OS/CriarOs/CriarOS';
import DetalhesOS from '../pages/OS/DetalhesOS/DetalhesOS';
import Notificacoes from '../pages/Notificacoes/Notificacoes';
import Perfil from '../pages/Perfil/Perfil';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="ListarOS"
                component={ListaOS}
            />
            <Stack.Screen
                name="CriarOS"
                component={CriarOS}
            />
            <Stack.Screen
                name="DetalhesOS"
                component={DetalhesOS}
            />
            <Stack.Screen
                name="Notificacoes"
                component={Notificacoes}
            />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
            />
        </Stack.Navigator>
    );
}