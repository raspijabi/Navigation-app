import { StyleSheet } from "react-native";

export const colors = {
    primary: '#5856D6',
    
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    menuContainer: {
        marginVertical: 50,
        alignItems: 'center',
    },
    menuTexto: {
        fontSize: 23,
        
    },
    menuBoton: {
        marginVertical: 10,
    }
})