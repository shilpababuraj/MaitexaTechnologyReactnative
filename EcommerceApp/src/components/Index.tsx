import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react';
import logo from '../assets/images/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Index({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.logoView}>
        <Image source={logo} resizeMode="contain" style={styles.logoImage} />
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.loginBtn}>
    <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.loginBtn}>
    <Text style={styles.loginText}>REGISTER</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f4f4f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },
    logoView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginTop: 0,
    },
    logoImage: {
        marginBottom: 25,
        width: 250,
        height: 100,
    },
    loginBtn: {
        
        width: 100,
        backgroundColor: '#d33db2',
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    loginText: {
        color: '#ffffff',
        fontWeight: '800',
        
    },
})