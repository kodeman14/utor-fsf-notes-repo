// Important for useQuery: We import the useQuery hook from @apollo/client
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';
import ProfileForm from '../components/ProfileForm';

// Important for useQuery: We import the specific query we'd like to perform from our queries.js utility
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  // Important for useQuery: We pass the query we'd like to execute on component load to the useQuery hook
  // The useQuery hook will always give back an object, and for the purposes of this app we're using the loading boolean and the data object
  // The data object will match the same result you'd get if you ran this query within the GraphQL playground
  const { loading, data } = useQuery(QUERY_PROFILES);

  // Important for useQuery: We use the optional chaining operator to get the resulting profile from our query, or fallback to an empty object if the query isn't resolved yet
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ProfileForm />
        </div>

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
