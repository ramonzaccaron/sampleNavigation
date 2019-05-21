import React from 'react';
import { View, Button, Text } from 'react-native';

const Page2 = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
            title="Help"
            onPress={() => navigation.navigate('Help')} />
    </View>
);

Page2.navigationOptions = {
    title: 'About',
}

export default Page2;