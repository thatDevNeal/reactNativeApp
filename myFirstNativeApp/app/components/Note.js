import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white } from 'ansi-colors';
/*
    ScrollView, allows the screen to be scrollable.
    TouchableOpacity are for buttons.
*/

export default class Note extends React.Component {
	render() {
		return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <TouchableOpacity onPress={this.props.delete} style={styles.noteDeleteButton}>
                    <Text style={styles.noteDeleteText}>X</Text>
                </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    noteDeleteButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    }
});