export const selectCandidatesContainer = (state) => state.candidates;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectCandidates = (state) => selectCandidatesContainer(state).get('byId');

export const selectCandidatesLoading = (state) => selectCandidatesContainer(state).get('loadingCandidates');
export const selectCandidatesLoaded = (state) => selectCandidatesContainer(state).get('loadedCandidates');
export const selectTechnologies = (state) => selectCandidatesContainer(state).get('technologies');
export const selectTechnologiesLoading = (state) => selectCandidatesContainer(state).get('loadingTechnologies');
export const selectTechnologiesLoaded = (state) => selectCandidatesContainer(state).get('loadedTechnologies');
export const selectApiDataError = (state) => selectCandidatesContainer(state).get('apiDataError');

export const selectSearchText = (state) => selectCandidatesContainer(state).get('searchText');
export const selectMinimumYears = (state) => selectCandidatesContainer(state).get('minimumYears');


