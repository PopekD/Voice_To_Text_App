/* eslint-disable prettier/prettier */
import React, { useState} from 'react';
import { View, Text, StyleSheet,  Alert, ScrollView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Notes = (): JSX.Element => {

    const [data, setData] = useState<readonly string[]>([])
    const [loading, isLoading] = useState(true)


    const retrieveData = async (): Promise<any> => {
        try {
            const value = await AsyncStorage.getAllKeys();
            if (value !== null) {
                setData(value);
                isLoading(false)
                return
            }
        } catch (error) {
            return console.log(error)
        }
        return
    }

    useFocusEffect(
        React.useCallback(() => {
                retrieveData();
        }, [])
    );
    const deleteNote = async (e: string) => {
        try{
            await AsyncStorage.removeItem(e);
            await retrieveData()
            return Alert.alert('Deleted', 'Your message has been deleted', [
                {
                    text: 'Ok',
                    style: 'cancel',
                },
            ]);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        loading ?  <Text>Loading</Text> : 
            <ScrollView style={styles.mainNotes}>
                <SafeAreaView>
                {data.map((result, index) => {
                    return ( 
                    <View style={styles.column} key={index}>  
                                <View style={styles.fullTextContainer}>
                                    <ScrollView>
                                    <Text key={index} style={styles.fullText} >
                                        {result}
                                    </Text>
                                </ScrollView>
                                <Pressable onPress={() => deleteNote(result)} style={styles.button}>
                                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', padding: 5, backgroundColor: 'grey', borderRadius: 20, width: 100, position: "absolute", bottom: 7 }}>Delete</Text>
                                </Pressable>
                            </View>
                    </View>
                    );
                })}
                </SafeAreaView>
            </ScrollView>

    );
};


const styles = StyleSheet.create({
    mainNotes: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5E3F5',
    },
    column: {
        alignItems: 'center',
        margin: 5
    },
    fullTextContainer:{
        height: 150,
        width: '85%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 35,

    },
    button:{
        width: 320,
        height: 50,
        borderRadius: 50,
        padding: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullText: {
        color: 'black',
        textAlign: 'center',
        padding: 10,
        paddingBottom: 35,
        fontSize: 15,
        flex: 2,
    }

});

export default Notes;
