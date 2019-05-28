import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

export default class CandidatesListItem extends Component {
	render() {
		const {_id, name, picture, email, phone} = this.props.data;
		return (
			<View key={_id}>
				<ListItem 	
					title={`${name.first} ${name.last}`}
					subtitle={email}
					//rightSubtitle={phone}
					roundAvatar
					leftAvatar={{ source: { uri: picture } }}
				/>
				<Divider style={dividerStyle} />
			</View>
		)
	}
}

const dividerStyle = { 
	backgroundColor: 'gray',
	height: 1
}