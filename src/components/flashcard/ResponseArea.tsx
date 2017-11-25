import * as React from 'react';
import { Text, View } from 'react-native';

export interface ResponseAreaProps {
    layoutStyle: any;
}

interface ResponseAreaState {
}

export class ResponseArea extends React.PureComponent<ResponseAreaProps, ResponseAreaState> {
    render() {
        return (
            <View style={[style.container, this.props.layoutStyle]}>
                <Text>Hello Component</Text>
            </View>
        );
    }
}

const style = {
    container: {
        backgroundColor: 'green',
    },
};
