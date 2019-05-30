import React, {PureComponent} from 'react';
import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import { ListItem, Divider, Icon } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

const buildSwipperButton = () => ([{
    backgroundColor: '#ffffff',
    text: ''
}]);

export default class CandidatesListItem extends PureComponent {
	handleAction(sectionId, rowId, direction) {
		const {acceptFn, rejectFn} = this.props;
		if(direction) {
			switch (direction) {
				case 'left':
					acceptFn();
					ToastAndroid.show('Candidate accepted !', ToastAndroid.SHORT);
					break;
				case 'right':
					rejectFn();
					ToastAndroid.show('Candidate rejected !', ToastAndroid.SHORT);
					break;
				default:
					break;
			}
		}
	}

	render() {
		const {setScrollEnabled, data} = this.props;
		const {_id, name, picture, email, phone} = data;
		return (
			<Swipeout 
				left={buildSwipperButton()}
				right={buildSwipperButton()}
				scroll={setScrollEnabled}
				buttonWidth={400}
				sensitivity={20}
				onOpen={this.handleAction.bind(this)}
			>
        		<View>
        			<ListItem	
						title={`${name.first} ${name.last}`}
						subtitle={email}
						//rightSubtitle={phone}
						roundAvatar
						leftAvatar={{ source: { uri: picture } }}
					/>
					<Divider style={dividerStyle} />
        		</View>
			</Swipeout>
		)
	}
}

const dividerStyle = { 
	backgroundColor: 'gray',
	height: 1
}