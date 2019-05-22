import React from 'react';
import { View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page1 = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
            title="About"
            onPress={() => navigation.navigate('About')} />
    </View>
);

Page1.navigationOptions = {
    title: 'Home',
    tabBarIcon: <Icon name="home" size={18} color="#999" />
}

export default Page1;