import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import React from 'react'

const TinderCard = (props) => {
  const {name, image, bio} = props.user;
  return (    
    <View style={styles.card}>
        <ImageBackground style={styles.image} 
        source={{uri:image}}
        >
            <View style={styles.cardInner}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.bio}>{bio}</Text>
            </View>
        </ImageBackground>
    </View>    
  )
}

const styles = StyleSheet.create({
    card:{
        width:"90%",
        height:"70%",
        borderRadius:10,
        
        shadowColor:"#000",
        shadowOffset:{
            width: 0,
            height:5,
        },
        shadowOpacity: 0.36,
        shadowRadius:6.68,
        elevation:11,
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:10,
        resizeMode:"cover",
        overflow:"hidden",
        justifyContent:"flex-end",
    },
    cardInner:{
        padding:10,
    },
    name:{
        fontSize:30,
        color:"white",
        fontWeight:"bold",
    },
    bio:{
        fontSize:18,
        color:"white",
        lineHeight:25,
    }
})

export default TinderCard