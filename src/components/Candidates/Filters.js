import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Slider, SearchBar } from 'react-native-elements';

export default class Filters extends Component {

	render() {
		const {
			searchText,
			minimumYears,
			setMinimumYearsValue,
			setSearchValue
		} = this.props;
		
		return (
			<View>
				<SearchBar
		        	placeholder="Type here..."
		        	onChangeText={setSearchValue}
		        	value={searchText}
		      	/>
		      	<View style={{marginRight: 4, marginLeft: 8}}>
					<Slider
				    	value={minimumYears}
				    	onSlidingComplete={setMinimumYearsValue}
				    	maximumValue={20}
				  	/>
				  	<Text>Minimum experience: {minimumYears} years</Text>
				</View>
			</View>
		)
	}
}