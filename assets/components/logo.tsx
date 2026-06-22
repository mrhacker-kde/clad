import Ionicons from '@expo/vector-icons/Ionicons'
import {Text, View, Image} from 'react-native'

export default function Logo(){
    return(
        <View>
            <View>
                <View>
                    <Image source={require('../images/icon.png')} style={{width: 100, height: 100}}/>
                    <Text>Clad Legion Tournament</Text>
                </View>
                <Text>PUBGM Tournaments</Text>
            </View>
            <View >
                {/* user profile icon */}
                <Ionicons name='person-circle' size={40} color={'orange'}/>
            </View>

        </View>
    )
}