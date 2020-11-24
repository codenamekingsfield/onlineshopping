import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function RectangleIndicator() {
    return (
        <View style={styles.recInd}></View>
    )
}

const styles = StyleSheet.create({
    recInd:{
        backgroundColor:"mediumpurple",
        height:10,
        width:30,
        borderRadius:5,
        marginHorizontal:2
      },
})
