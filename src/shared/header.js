import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({title}){

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
    
}
const styles = StyleSheet.create({
    
    header: {
        backgroundColor: '#00adb5',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'ubuntu-bold',
        fontSize: 20,
        color: '#eeeeee',
        letterSpacing: 1,
        
    },
});