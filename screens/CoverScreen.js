import React from 'react';
import { View, Image, Button } from 'react-native';
import { StyleSheet } from 'react-native';


function CoverScreen({navigation}){
    const handleGoToContent = () => {
        navigation.navigate('Content')
    };

    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://www.infobae.com/new-resizer/fb1QJrGkyXqDdURm0GPGxr6SibE=/1200x900/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/QBPJF3NAKVBRTJGZUR676GTAYA.jpg'}}
             style={styles.coverImage}
             >
               
            </Image>
            <View style={styles.buttonContainer}>
                <Button
                title='Ver Contenido'
                onPress={handleGoToContent}
                color="#FFFFFF"
                >
                </Button>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    coverImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    buttonContainer:{
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        padding: 10,
    },
});


export default CoverScreen;