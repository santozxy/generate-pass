import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native'

import useStorage from '../../hooks/useStorage'
import PasswordItem from './passwordItem';

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const { getItem, removeItem } = useStorage();
    const focused = useIsFocused();


    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])



    async function handleDelePassword(item) {
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Passwords</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14, }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) =>
                        <PasswordItem data={item} removePassword={() => handleDelePassword(item)} />
                    }
                />
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },

    content: {
        flex: 1,
        paddingRight: 14,
        paddingLeft: 14,
    }
})

