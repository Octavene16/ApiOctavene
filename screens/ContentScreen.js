
import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-swiper';


function ContentScreen () {
    const [characters, setCharacters] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);
    
    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/')
        .then((response)=>{
            setCharacters(response.data.results)
        })
        .catch((error)=>{
            console.error(error)
        })
    }, [])

    return (
        <View style={styles.container}>
          <Text style={styles.header}>Personajes de Rick and Morty</Text>
          <View style={styles.characterContainer}>
            <Swiper
              ref={swiperRef}
              loop={false}
              index={currentIndex}
              showsPagination={false}
            >
                    {characters.map((item)=>(
                        <View key={item.id} style={styles.characterItem}>
                            <Image source={{uri: item.image}} style={styles.characterImage}></Image>
                            <View style={styles.characterInfo}
                            >
                                <Text style={styles.characterName}>{item.name}</Text>
                                <Text style={styles.characterInfoText}>Status: {item.status}</Text>
                                <Text style={styles.characterInfoText}>Especie: {item.species}</Text>
                                <Text style={styles.characterInfoText}>Genero: {item.gender}</Text>
                                
                            </View>
                        </View>
                    ))}

                </Swiper>


            </View>
        </View>
    );

}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    characterContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    characterItem:{
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 16,
        maxWidth: 450,
    },
    characterImage: {
        width: 250,
        height: 250,
        marginBottom: 16,
        borderRadius: 125,
    },
    characterInfo: {
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center'
    },
    characterInfoText: {
        fontSize: 16,
        marginBottom: 8,
    },
    characterName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 12
    },
    characterDetail: {
        fontSize: 16,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    }
});

export default ContentScreen;