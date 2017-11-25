import * as React from 'react';
import { Text, View } from 'react-native';

export interface PromptAreaProps {
    layoutStyle: any;
}

interface PromptAreaState {
}

export class PromptArea extends React.PureComponent<PromptAreaProps, PromptAreaState> {
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
        backgroundColor: 'blue',
    },
};
