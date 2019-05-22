import React from 'react';
import { View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page2 = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
            title="Help"
            onPress={() => navigation.navigate('Help')} />
    </View>
);

Page2.navigationOptions = {
    title: 'About',
    tabBarIcon: <Icon name="info" size={18} color="#999" />
}

export default Page2;