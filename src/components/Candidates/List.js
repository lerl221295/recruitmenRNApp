import React, {Component} from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ListItem from './ListItem';
import { Card } from 'react-native-elements';


export default class CandidatesList extends Component {
	
	keyExtractor(item, index){
		return index.toString();
	};

	render() {
		console.log('rendering the list');
		return (
			<FlatList
				keyExtractor={this.keyExtractor}
				data={this.props.candidates}
				renderItem={({item}) => <ListItem data={item} />}
			/>
		)
	}
}