


import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'



const Onboarding = ({ navigation }: { navigation: any }) => {
    const imageSources = [
        require('../Parmacity/src/assets/images/onboarch-3.jpg'),
        require('../Parmacity/src/assets/images/onboarch-2.png'),
        require('../Parmacity/src/assets/images/onboarch-1.png'),
    ];

    const [nextImage, setNextImage] = useState(0);
    const shownextImage = () => {
        if (nextImage < imageSources.length - 1) {
            setNextImage(nextImage + 1);
        } else {
            setNextImage(0);
        }
    };
    const skipnextImage = () => {
        if (nextImage > 0) {
            setNextImage(nextImage - 1)
        } else {
            setNextImage(imageSources.length - 1)
        }
    };

    return (
        <SafeAreaView style={{}}>
            <View style={[styles.container]}>
                <View style={[styles.Secttion, styles.FDRC]}>
                    <View style={[styles.SecttionImages]}>
                        <Image source={imageSources[nextImage]} style={[styles.SecttionImages]} />
                    </View>
                    <View style={[styles.SecttionButton, styles.FDRC]}>
                        <View style={[styles.buttonNext, styles.FDRC]}>
                            <TouchableOpacity onPress={shownextImage}>
                                <Text style={{
                                    fontSize: 18,
                                    lineHeight: 55,
                                    color: '#0d62fa'
                                }}>
                                    Tiếp tục</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.push('#'); }}>
                            <Text style={{
                                fontSize: 18,
                                lineHeight: 50,
                                color: 'white',
                                textDecorationLine: 'underline'
                            }}>Bỏ qua</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    Secttion: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    SecttionImages: {
        width: '100%',
        height: '100%',
    },
    images: {
        width: '100%',
        height: '100%'
    },
    SecttionButton: {
        width: '90%',
        height: 'auto',
        position: 'absolute',
        top: '85%',
    },
    buttonNext: {
        width: '90%',
        height: 60,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    FDRC: {
        flexDirection: 'column',
        alignItems: 'center'
    },
})
