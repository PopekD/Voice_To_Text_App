/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, ScrollView, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Voice, { SpeechErrorEvent, SpeechResultsEvent } from '@react-native-voice/voice';
import { Svg, G, Rect, Defs, ClipPath, Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';



const Home = (): JSX.Element => {

    const [results, setResults] = useState<string[]>([]);
    const [isListening, setIsListening] = useState<boolean>(false); 
    const [opacity, setOpacity] = useState<number>(1);
    const [stopOpacity, setStopOpacity] = useState<number>(0);
    const [opacities, setOpacities] = useState<number[]>([0, 0, 0, 1]); 
    const [isclicked, setisClicked] = useState<boolean>(false)
    
    let interval: any;

    const animate = () => {
       interval = setInterval(() => {
            let i = Math.floor(Math.random() * 2);
            let x = Math.floor(Math.random() * 2);
            let y = Math.floor(Math.random() * 2);
            setOpacities([x, i, y, 1]);
        }, 200)
    };
    const stopAnimate = () => {
        (function (w) { w = w || window; var i = w.setInterval(function () { }, 2); while (i >= 0) { w.clearInterval(i--); } })(/*window*/);
    }

    async function toggleListening() {
        try {
            if (isListening) {
                await Voice.stop();
                setOpacity(1);
                setStopOpacity(0);
                setIsListening(false);
            } else {
                setResults([]);
                await Voice.start('en-US');
                setOpacity(0);
                setStopOpacity(1);
                setIsListening(true);
            }
        } catch (e) {
            console.error(e);
        }
    }

    const saveItems = async () => {
        if (results.length > 0){
            try {
                await AsyncStorage.setItem(results[0], results[0]);
                Alert.alert('Saved', 'Your message has been saved', [
                    {
                        text: 'Ok',
                        style: 'cancel',
                    },
                ]);
            }
            catch (e) {
                console.log(e);
            }
        }
    }


    useEffect(() => {
        async function onSpeechResults(e: SpeechResultsEvent) {
            const data = await e.value ?? []
            setResults(data);
        }

        function onSpeechError(e: SpeechErrorEvent) {
            console.error(e);
            setStopOpacity(0);
            setOpacity(1);
            setisClicked(false);
            setIsListening(false);
            (function (w) { w = w || window; var i = w.setInterval(function () { }, 2); while (i >= 0) { w.clearInterval(i--); } })(/*window*/);
            Voice.destroy().then(Voice.removeAllListeners);
        }

        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        return function cleanup() {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);



    return (
        <SafeAreaView style={styles.mainHome}> 
            <View style={styles.startContainer}>
                <Animated.View>
                <Svg
                    width={198}
                    height={90}
                    viewBox="0 0 198 90"
                    fill="none"
                    style={{ backgroundColor: 'white', borderRadius: 40, margin: 30}}
                >
                    <G filter="url(#filter0_d_14_27)">
                        <G clipPath="url(#clip0_14_27)"> 
                            <G fill="#FF78C7" opacity={opacities[0]}>
                                <Rect x={25} y={33} width={8} height={25} rx={4} />
                                <Rect x={41} y={26} width={8} height={37} rx={4} />
                                <Rect x={57} y={16} width={8} height={54} rx={4} />
                                <Rect x={73} y={26} width={8} height={37} rx={4} />
                                <Rect x={89} y={33} width={8} height={25} rx={4} />
                                <Rect x={105} y={26} width={8} height={37} rx={4} />
                                <Rect x={121} y={16} width={8} height={54} rx={4} />
                                <Rect x={137} y={26} width={8} height={37} rx={4} />
                                <Rect x={153} y={33} width={8} height={25} rx={4} />
                                <Rect x={169} y={26} width={8} height={37} rx={4} />
                            </G>
                            <G fill="#FF78C7" opacity={opacities[1]}>
                                <Rect x={25} y={26} width={8} height={37} rx={4} />
                                <Rect x={41} y={16} width={8} height={54} rx={4} />
                                <Rect x={57} y={26} width={8} height={37} rx={4} />
                                <Rect x={73} y={33} width={8} height={25} rx={4} />
                                <Rect x={89} y={39} width={8} height={13} rx={4} />
                                <Rect x={105} y={33} width={8} height={25} rx={4} />
                                <Rect x={121} y={26} width={8} height={37} rx={4} />
                                <Rect x={137} y={16} width={8} height={53} rx={4} />
                                <Rect x={153} y={26} width={8} height={37} rx={4} />
                                <Rect x={169} y={33} width={8} height={25} rx={4} />
                            </G>
                            <G fill="#FF78C7" opacity={opacities[2]}>
                                <Rect x={25} y={41} width={8} height={7} rx={3.5} />
                                <Rect x={41} y={33} width={8} height={25} rx={4} />
                                <Rect x={57} y={26} width={8} height={37} rx={4} />
                                <Rect x={73} y={20} width={8} height={51} rx={4} />
                                <Rect x={89} y={39} width={8} height={13} rx={4} />
                                <Rect x={105} y={18} width={8} height={53} rx={4} />
                                <Rect x={121} y={26} width={8} height={37} rx={4} />
                                <Rect x={137} y={26} width={8} height={37} rx={4} />
                                <Rect x={153} y={33} width={8} height={25} rx={4} />
                                <Rect x={169} y={41} width={8} height={7} rx={3.5} />
                            </G>
                            <G fill="#FF78C7" opacity={opacities[3]}>
                                <Rect x={25} y={31} width={8} height={25} rx={4} />
                                <Rect x={41} y={18} width={8} height={47} rx={4} />
                                <Rect x={57} y={13} width={8} height={56} rx={4} />
                                <Rect x={73} y={37} width={8} height={13} rx={4} />
                                <Rect x={89} y={27} width={8} height={29} rx={4} />
                                <Rect x={105} y={18} width={8} height={47} rx={4} />
                                <Rect x={121} y={13} width={8} height={56} rx={4} />
                                <Rect x={137} y={27} width={8} height={29} rx={4} />
                                <Rect x={153} y={18} width={8} height={47} rx={4} />
                                <Rect x={169} y={37} width={8} height={13} rx={4} />
                            </G>
                            
                        </G>
                    </G>
                    <Defs>
                        <ClipPath id="clip0_14_27">
                            <Rect x={4} width={190} height={82} rx={5} fill="#fff" />
                        </ClipPath>
                    </Defs>
                </Svg>
                </Animated.View>
                <Pressable onPress={!isclicked ? () => { setisClicked(true); toggleListening(); animate() } : () => { stopAnimate(); toggleListening(); setisClicked(false) }} >
                    <Text style={{ fontSize: 15, textAlign: 'center', backgroundColor: 'white', borderRadius: 60, width: 60, padding: 10 }}>    
                        <Svg
                            width={32}
                            height={41}
                            viewBox="0 0 32 41"
                            fill="none"
                        >
                            <G fill="#7E0F50" opacity={stopOpacity}>
                                <Path d="M11.961 5h-9.23c-.46 0-.899.165-1.223.457A1.485 1.485 0 001 6.557v23.885c0 .413.183.81.508 1.101.324.292.764.457 1.223.457h9.23c.46 0 .9-.165 1.224-.457.324-.292.507-.688.507-1.1V6.557c0-.413-.183-.81-.507-1.101A1.835 1.835 0 0011.96 5zm-.576 24.923H3.308V7.077h8.077v22.846zM29.27 5h-9.232c-.458 0-.898.165-1.223.457a1.485 1.485 0 00-.507 1.1v23.885c0 .413.183.81.507 1.101.325.292.765.457 1.223.457h9.231c.46 0 .899-.165 1.224-.457.324-.292.507-.688.507-1.1V6.557c0-.413-.183-.81-.508-1.101A1.835 1.835 0 0029.27 5zm-.578 24.923h-8.077V7.077h8.077v22.846z" />
                            </G>
                            <Path
                                d="M18.6 0h-5.2c-3.35 0-6.067 2.165-6.067 4.836v15.891c0 2.671 2.716 4.837 6.067 4.837h5.2c3.35 0 6.067-2.166 6.067-4.837V4.837C24.667 2.164 21.95 0 18.6 0z"
                                fill="#FF78C7"
                                opacity={opacity}
                            />
                            <G stroke="#181818" strokeWidth={5.09572} opacity={opacity}>
                                <Path
                                    d="M29 13.818v7.6c0 4.198-4.264 7.6-9.534 7.6h-6.932c-5.266 0-9.534-3.402-9.534-7.6v-7.6"
                                    strokeLinecap="round"
                                />
                                <Path d="M16 29.71v7.6" strokeLinecap="square" />
                                <Path
                                    d="M9.067 38h13.866"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </G>
                        </Svg>
                    </Text>
                </Pressable>
            </View>

            <ScrollView style={styles.text}>
                <Text style={styles.resultText}>{results[0]}</Text>
            </ScrollView>
            <View style={styles.saveButtonContainer}>
                <Pressable onPress={saveItems} >
                    <Text style={{ color: '#DF69C2', fontSize: 15, textAlign: 'center', padding: 5, backgroundColor: 'white', borderRadius: 20, width: 100, }}>Save</Text>
                </Pressable>
            </View>

        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    mainHome: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#F5E3F5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svg: {
        height: 200,
        width: 200,
    },
    startContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultText: {
        color: 'black',
        fontSize: 20,
        padding: 20
    },
    saveButtonContainer: {
        flex: 0.3,
        padding: 20
    },
    text: {
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
        flex: 1,
        width: '80%',
    }

});

export default Home;
