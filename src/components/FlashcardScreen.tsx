import * as React from 'react';
import { View } from 'react-native';

import { PromptArea } from './flashcard/PromptArea';
import { ResponseArea } from './flashcard/ResponseArea';

export interface FlashcardScreenProps {
}

interface FlashcardScreenState {
}

export class FlashcardScreen extends React.PureComponent<FlashcardScreenProps, FlashcardScreenState> {
    render() {
        return (
            <View style={style.container}>
                <PromptArea layoutStyle={style.area} />
                <ResponseArea layoutStyle={style.area} />
            </View>
        );
    }
}

const style = {
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    area: {
        flex: 1,
    },
};
