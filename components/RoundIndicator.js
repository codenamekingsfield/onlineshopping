import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function RoundIndicator() {
    return (
        <View style={styles.roundInd}></View>
    )
}

const styles = StyleSheet.create({
    roundInd:{
        backgroundColor:"lavender",
        height:10,
        width:10,
        borderRadius:5,
        padding: 2,
        marginHorizontal:3
      },
})
