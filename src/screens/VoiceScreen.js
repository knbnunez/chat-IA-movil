import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const squareContainerWidth = windowWidth/1.5;
const squareContainerHeight = windowHeight/3;

const VoiceScreen = () => {
    
    const [colorChildrenSquare1, setCHS1] = useState('white');
    const [colorChildrenSquare2, setCHS2] = useState('white');
    const [colorChildrenSquare3, setCHS3] = useState('white');
    const [colorChildrenSquare4, setCHS4] = useState('white');
    const [selectNumber, setSN] = useState(0);

    const _handlePress = () => {
        randomNumber = Math.floor((Math.random() * 4) + 1);
        if (randomNumber != selectNumber) {
            if (randomNumber == 1) {
                setCHS1('red');
                setCHS2('white');
                setCHS3('white');
                setCHS4('white');
            } else if (randomNumber == 2) {
                setCHS1('white');
                setCHS2('green');
                setCHS3('white');
                setCHS4('white');
            } else if (randomNumber == 3) {
                setCHS1('white');
                setCHS2('white');
                setCHS3('blue');
                setCHS4('white');
            } else if (randomNumber == 4) {
                setCHS1('white');
                setCHS2('white');
                setCHS3('white');
                setCHS4('yellow');
            }
        } else {
            _handlePress();
        }
    };

    return (
        <SafeAreaView style={{
            height: windowHeight,
            width: windowWidth,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
           
                <View style={{
                    //  darle border
                    backgroundColor: 'black',
                    width: squareContainerWidth,
                    height: squareContainerHeight,
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <Pressable onPressIn={() => {setSN(1); _handlePress()}}>
                    <View style={{
                        backgroundColor: colorChildrenSquare1,
                        width: squareContainerWidth/2,
                        height: squareContainerHeight/2,
                    }}>

                    </View>
                    </Pressable>

                    <Pressable onPressIn={() => {setSN(2); _handlePress()}}>
                    <View style={{
                        backgroundColor: colorChildrenSquare2,
                        width: squareContainerWidth/2,
                        height: squareContainerHeight/2,
                    }}>
                        
                    </View>
                    </Pressable>

                    <Pressable onPressIn={() => {setSN(3); _handlePress()}}>
                    <View style={{
                        backgroundColor: colorChildrenSquare3,
                        width: squareContainerWidth/2,
                        height: squareContainerHeight/2,
                    }}>

                    </View>
                    </Pressable>

                    <Pressable onPressIn={() => {setSN(4); _handlePress()}}>
                    <View style={{
                        backgroundColor: colorChildrenSquare4,
                        width: squareContainerWidth/2,
                        height: squareContainerHeight/2,
                    }}>

                    </View>
                    </Pressable>
                </View>         

        </SafeAreaView>
  );
};

export default VoiceScreen;
