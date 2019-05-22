import React from 'react';
import { View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page3 = () => (
    <View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
        <Text>Help</Text>
    </View>
);

Page3.navigationOptions = {
    title: 'Help',
    tabBarIcon: <Icon name="question" size={18} color="#999" />
}

export default Page3;