import React, {Component} from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ListItem from './ListItem';
import { Card } from 'react-native-elements';


export default class CandidatesList extends Component {
	state = {
		scrollEnabled: true
	}

	setScrollEnabled = scrollEnabled => this.setState({scrollEnabled})

	keyExtractor(item, index){
		return item._id;
	};

	render() {
		const {rejectCandidate, acceptCandidate} = this.props;
		return (
			<FlatList
				scrollEnabled={this.state.scrollEnabled}
				keyExtractor={this.keyExtractor}
				data={this.props.candidates}
				renderItem={({item}) => (
					<ListItem 
						data={item}
						setScrollEnabled={this.setScrollEnabled}
						acceptFn={() => acceptCandidate(item._id)}
						rejectFn={() => rejectCandidate(item._id)}
					/>
				)}			
			/>
		)
	}
}