import React, {PureComponent} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Divider, Icon } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

const IconComponent = ({name, type, color}) => (
	<View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
  	>
  		<Icon
		  name={name}
		  type={type}
		  color={color}
		/>
    </View>
);

const buildSwipperButton = (onPress, name, type, color) => ([{
    backgroundColor: '#ffffff',
    onPress,
    component: <IconComponent name={name} type={type} color={color} />
}]);

export default class CandidatesListItem extends PureComponent {
	render() {
		const {acceptFn, rejectFn} = this.props;
		const {_id, name, picture, email, phone} = this.props.data;
		return (
			<Swipeout 
				left={buildSwipperButton(acceptFn, 'thumbs-up', 'font-awesome', 'green')}
				right={buildSwipperButton(rejectFn, 'thumbs-down', 'font-awesome', 'red')}
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