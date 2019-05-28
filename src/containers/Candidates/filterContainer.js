import React, {Component} from 'react';
import { connect } from 'react-redux';
import Filters from '../../components/Candidates/Filters';

import {
  setSearchValue,
  setMinimumYearsValue
} from './actions';

import {
  selectSearchText,
  selectMinimumYears,
  selectMaximumYears
} from './selectors';

const mapStateToProps = (state) => ({
  searchText: selectSearchText(state),
  minimumYears: selectMinimumYears(state)
});

const actions = {
  setSearchValue,
  setMinimumYearsValue
};

export default connect(mapStateToProps, actions)(Filters);
