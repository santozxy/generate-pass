import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, closeModal }) {
    const { saveItem } = useStorage();

    async function handleCopyPass() {
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)
        alert("Senha salva com sucesso")
        closeModal();
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.title}>
                    Senha gerada:
                </Text>

                <Pressable style={styles.innerPass} onLongPress={handleCopyPass}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={closeModal}>
                        <Text style={styles.buttonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPass}>
                        <Text style={styles.buttonSaveText}>
                            Salvar senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        gap: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 24,

    },
    innerPass: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8.
    },
    text: {
        color: "#FFF",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginTop: 8,
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 10
    },
    buttonSave: {
        backgroundColor: "#392de9",
        borderRadius: 8,
        color: "#fff"
    },
    buttonSaveText: {
        color: "#fff",
        fontWeight: "bold"
    }


})