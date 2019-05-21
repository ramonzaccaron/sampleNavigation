import React from 'react';
import { View, Button, Text } from 'react-native';

const Page3 = () => (
    <View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
        <Text>Help</Text>
    </View>
);

Page3.navigationOptions = {
    title: 'Help',
}

export default Page3;