const {View,Text,Image, TextInput, TouchableOpacity} = require('react-native');
import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function LoginPage(){
    return(
        <View>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require('../../img/TummyFull_Logo.png')}></Image>
            </View>
            <View styles={styles.loginContainer}>
                <Text style={styles.text_header}>Login!!!</Text>
                <FontAwesome name="user-o" color="#420475" style={styles.smallIcon} />
                <TextInput placeholder='EmailId' style={styles.textInput} />
            </View>
            <View styles={styles.loginContainer}>
                <Text style={styles.text_header}>Login!!!</Text>
                <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
                <TextInput placeholder='Password' style={styles.textInput} />
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.inBut}>
                    <View>
                        <Text style={styles.textSign}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage;



