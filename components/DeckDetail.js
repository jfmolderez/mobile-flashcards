import React from 'react'
import { purple, floralWhite } from '../utils/colors'
import { View, Text, StyleSheet } from 'react-native'

export default function DeckDetail ({ title, cards }) {
    const cardsStr = 
        cards.length === 0 ? 'Empty Deck' : 
            cards.length > 1 ? `${cards.length} Cards` : `${cards.length} Card`
    return (
        <View style={styles.deckDetail}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.cardsTxt}>{cardsStr}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   deckDetail : {
       backgroundColor: floralWhite,
       alignItems: 'center',
       padding: 15,
       margin: 10,
       borderRadius: 10,
   },
   titleText: {
    fontSize: 20,
    padding: 3,
    color: purple,
   },
   cardsTxt: {
    fontSize: 13,
    color: purple,
   } 
})


