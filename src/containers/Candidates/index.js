import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import CandidatesList from '../../components/Candidates/List';
import Filters from './filterContainer';

import {
  getCandidates,
  getTechnologies
} from './actions';

import {
  selectCandidates,
  selectSearchText,
  selectMinimumYears,
  selectCandidatesLoading,
  selectCandidatesLoaded,
  selectTechnologies,
  selectTechnologiesLoading,
  selectTechnologiesLoaded,
  selectApiDataError
} from './selectors';



/**
 * Candidates Container Component
 *
 * @class Candidates
 * @extends {React.Component}
 */
export class Candidates extends Component {

  componentDidMount() {
    const {getCandidates ,getTechnologies} = this.props;
    getTechnologies();
    getCandidates();
  }

  shouldComponentUpdate(next) {
    if(this.props.minimumYears !== next.minimumYears
      && !next.searchText) {
      return false;
    }
    return true;
  }

  filter() {
    const {candidates, searchText, minimumYears} = this.props;
    if(!searchText) {
      return Object.keys(candidates)
    };
    const filtered = [];
    for(let candidateIndex in candidates) {
      const candidate = candidates[candidateIndex];
      const candidateHasMatch = candidate.technologies.some((tech) => {
          return (tech.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) && (tech.experianceYears >= minimumYears) 
      });

      if(candidateHasMatch) {
        filtered.push(candidateIndex);
      }
    }
    return filtered;
  }

  render() {
    const {
      candidates,
      technologies,
      apiDataError,
      loading,
      dataLoaded
    } = this.props;

    if (loading) {
      return (
        <View style={[centerStyle.container, centerStyle.horizontal]}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      )
    }

    if (apiDataError) {
      return (
        <View style={[centerStyle.container, centerStyle.horizontal]}>
          <Text>Oops, there is something wrong!</Text>
        </View>
      )
    }

    return (
      <View style={[centerStyle.container]}>
        <Filters/>
        <CandidatesList 
          candidates={this.filter(candidates).map(key => candidates[key])}
          technologies={technologies}
        />
      </View>
    );
  }
}

const centerStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

const mapStateToProps = (state) => ({
  candidates: selectCandidates(state),
  searchText: selectSearchText(state),
  minimumYears: selectMinimumYears(state),
  technologies: selectTechnologies(state),
  apiDataError: selectApiDataError(state),
  loading: selectTechnologiesLoading(state) || selectCandidatesLoading(state),
  dataLoaded: selectTechnologiesLoaded(state) || selectCandidatesLoaded(state)
});

const actions = { getCandidates, getTechnologies };

export default connect(mapStateToProps, actions)(Candidates);
