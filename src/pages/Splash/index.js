import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Image } from 'react-native'
import { SplashBackground, Logo } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect (() => {
        setTimeout( () => {
            navigation.replace('Home');
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({

    background: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Logo: {
        width : 222,
        height : 105
    }
})
