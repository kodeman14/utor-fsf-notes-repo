// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

// Using axios, we create a search method that is specific to our use case and export it at the bottom
export const search = (query) =>
  axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`
  );

export const excludesProfaneWords = (query) => {
  // whatever profanity filter, returns true or false
  //
  return query.includes("poop") ? false : true;
};

// Export an object with a "search" method that searches the Giphy API for the passed query
// export default { search, excludesProfaneWords };
