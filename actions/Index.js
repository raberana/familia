export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export function getData() {
  return dispatch => {
    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      dispatch({ type: DATA_AVAILABLE, data: 'sample data' });
    }, 2000);
  };
}
