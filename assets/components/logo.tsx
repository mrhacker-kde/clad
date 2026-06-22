import Ionicons from '@expo/vector-icons/Ionicons'
import {Text, View, Image} from 'react-native'
import { styles } from '../styles/styles'

export default function Logo(){
    return(
        <View style={styles.cnt}>
            <View style={styles.cnt2}>
                <View style={styles.cnt3}>
                    <Image source={require('../images/icon.png')} style={styles.img}/>
                    <Text style={styles.timg}>Clad Legion Tournament</Text>
                </View>
                <Text style={styles.lpm}>PUBGM Tournaments</Text>
            </View>
            <View >
                {/* user profile icon */}
                <Ionicons name='person-circle' size={40} color={'orange'}/>
            </View>

        </View>
    )
}