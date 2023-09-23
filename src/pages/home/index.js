import { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassword } from "../../components/modal";

let caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

export function Home() {
    const [size, setSize] = useState(10);
    const [password, setPassoword] = useState("");
    const [showModal, setShowModal] = useState(false);

    function generatePassword() {
        let password = "";
        for (let i = 0, n = caracteres.length; i < size; i++) {
            password += caracteres.charAt(Math.floor(Math.random() * n));
        }
        setPassoword(password);
        setShowModal(!showModal);
    }
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logo} />
            <Text style={styles.title}>{size} Caracteres</Text>
            <View style={styles.sliderContainer}>
                <Slider
                    style={styles.slider}
                    minimumValue={6}
                    maximumValue={20}
                    thumbTintColor="#392de9"
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>
            <Modal visible={showModal} animationType="fade" transparent={true}>
                <ModalPassword password={password} closeModal={() => setShowModal(!showModal)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        marginBottom: 60,
    },

    title: {
        fontSize: 15,
        fontWeight: "bold",
    },

    sliderContainer: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 8,
    },

    slider: {
        height: 50,
    },

    button: {
        marginBottom: 18,
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        borderRadius: 8,
    },

    buttonText: {
        fontSize: 20,
        color: "#FFF",
    },

});
