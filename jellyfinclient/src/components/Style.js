import {
    StyleSheet,
    Dimensions
} from 'react-native';

const win = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        width: win.width,
        height: win.height,
        backgroundColor: '#101010',
    },
    loginInput: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        alignSelf: 'center'
    },
    inputBox: {
        height: 25,
        backgroundColor: '#292929',
        borderColor: '#00a4dc',
        borderStyle: 'solid',
        borderRadius: '.15em',
        borderWidth: '.07em'
    },
    text: {
        color: '#ffffff',
        fontFamily: 'Helvetica'
    },
    biggerText: {
        color: '#ffffff',
        fontSize: 17,
        alignSelf: 'center'
    },
    button: {
        margin: 5
    }
});
