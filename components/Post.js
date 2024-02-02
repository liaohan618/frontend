import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function Post( {post} ) {
    let liked = true;
    let likesNum = 0;

    const handleLike = () => {
        console.log('liked');
    };

    const [likes, setLikes] = useState(0);

    function handlePress() {
        console.log('Pressed');
    }

    return(
        <View style={styles.postContainer}>
            <View style={styles.upperContainer}>
                <Image 
                    style={styles.profileImage}
                    source={require('../assets/icon.png')} 
                />

                <View style={styles.innerContainer}>
                    <Text style={styles.textColor}>{post.author}</Text>
                    <Text style={styles.textColor}>{post.title}</Text>
                </View>
            </View>


            <View style={styles.likes}>
                <TouchableOpacity onPress={() => setLikes(likes + 1)}>
                    <Ionicons
                        name={liked ? 'heart' : 'heart-outline'}
                        size={16}
                        color={liked ? 'red' : 'grey'}
                    />
                </TouchableOpacity>
                <Text style={styles.likesText}>{likes} likes </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    textColor: {
      color: '#fff'
    },

    profileImage: {
        width: 50,
        height: 50,
        broaderRadius: 50
    },

    upperContainer: {
        display: 'flex',
        flexDirection: 'row', // likes text and heart in the same row
        width: '100px'
    },

    innerContainer: {
        backgroundColor: 'grey',
        marginLeft: 10,
        paddingVertical: 5
        
    },

    titleText: {
        marginTop: 5
    },

    postContainer: {
        marginBottom: 15,
        justifyContent: 'flex-start',
        width: '80%' // posts position
    },

    likes: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    }
  });