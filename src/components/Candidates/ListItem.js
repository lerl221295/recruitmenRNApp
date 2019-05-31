import React, {PureComponent} from 'react';
import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default class CandidatesListItem extends PureComponent {
	state = {
		layoutHeight: 1
	}

	handleAction(sectionId) {
		const {acceptFn, rejectFn} = this.props;
		switch (sectionId) {
			case 0:
				acceptFn();
				ToastAndroid.show('Candidate accepted !', ToastAndroid.SHORT);
				break;
			case 2:
				rejectFn();
				ToastAndroid.show('Candidate rejected !', ToastAndroid.SHORT);
				break;
			default:
				break;
		}
	}

	render() {
		const {setScrollEnabled, data} = this.props;
		const {_id, name, picture, email, phone} = data;
		return (
			<Swiper 
				height={this.state.layoutHeight}
				index={1}
				showsPagination={false}
				showsButtons={false}
				onIndexChanged={this.handleAction.bind(this)}
			>
        		<View/>
        		<View onLayout={(event) => {
					const {height} = event.nativeEvent.layout;
					this.setState({layoutHeight: height});
				}}>
        			<ListItem	
						title={`${name.first} ${name.last}`}
						subtitle={email}
						//rightSubtitle={phone}
						roundAvatar
						leftAvatar={{ source: { uri: picture } }}
					/>
					<Divider style={dividerStyle} />
        		</View>
        		<View/>
			</Swiper>
		)
	}
}

const dividerStyle = { 
	backgroundColor: 'gray',
	height: 1
}