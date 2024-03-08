import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = ({ title, iconRight, iconLeft }) => {
    const renderLeft = () => (
        <TouchableOpacity style={{width:30,height:30}}>
            {iconLeft && <Image source={iconLeft} style={{ height: 30, width: 30 }} />}
        </TouchableOpacity>
    );

    const renderCenter = () => (
        <View>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
        </View>
    );

    const renderRight = () => (
        <View style={{width:30,height:30}}>
            {iconRight && <Image source={iconRight} style={{ height: 30, width: 30 }} />}
        </View>
    );

    return (
        <View style={styles.headerContainer}>
            {renderLeft()}
            {renderCenter()}
            {renderRight()}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        padding: 10,
    },

});

export default Header;
