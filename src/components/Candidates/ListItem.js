import React, {PureComponent} from 'react';
import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import { ListItem, Divider, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default class CandidatesListItem extends PureComponent {
	itemHeight = 74;

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
				height={this.itemHeight + 1}
				index={1}
				showsPagination={false}
				showsButtons={false}
				onIndexChanged={this.handleAction.bind(this)}
			>
        		<View style={{flex: 1, backgroundColor: '#4BB543'}} >
        			<View style={{alignSelf: 'flex-end'}}>
        				<View style={{alignSelf: 'flex-start', paddingRight: 5}}>
	        				<View  style={styles.iconContainer}> 
	        					<Icon type='font-awesome' name="thumbs-up" color="#ffffff" />
	        				</View>
	        			</View>
        			</View>
        		</View>
        		<View>
        			<ListItem	
						title={`${name.first} ${name.last}`}
						subtitle={email}
						//rightSubtitle={phone}
						containerStyle={{height: this.itemHeight}}
						roundAvatar
						leftAvatar={{ source: { uri: picture } }}
					/>
					<Divider style={styles.dividerStyle} />
        		</View>
        		<View style={{flex: 1, backgroundColor: 'red'}} >
        			<View style={{alignSelf: 'flex-start', paddingLeft: 5}}>
	        			<View  style={styles.iconContainer}> 
	        				<Icon type='font-awesome' name="thumbs-down" color="#ffffff" />
	        			</View>
        			</View>
        		</View>
			</Swiper>
		)
	}
}

const styles = {
	iconContainer: { 
	    flex: 1,
	    alignItems: 'center', 
	    justifyContent: 'center', 
	    flexDirection: 'column'
	},
	dividerStyle: {
		backgroundColor: 'gray',
		height: 1
	}
}