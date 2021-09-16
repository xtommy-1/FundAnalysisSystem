import React from 'react'
import {StyleSheet} from 'react-native'
import {Button as PaperButton} from 'react-native-paper'
import {theme} from '../../core/theme'

export default function Button({mode, style, ...props}) {
    return (
        <PaperButton
            style={[
                styles.button,
                {backgroundColor: '#d44036'},
                style,
            ]}
            labelStyle={styles.text}
            mode={mode}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
    },
    text: {
        // fontWeight: 'bold',
      fontWeight:"500",
        fontSize: 18,
        lineHeight: 26,
    },
})
