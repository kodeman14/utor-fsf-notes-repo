import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // Important for Query Variables: The useQuery hook is able to take a second argument which is where we will pass the query arguments needed to complete the request for a specific profile
    // The second argument is passed as an object with a variables property
    // The variables object will receive each key matching the query definition in utils/queries.js, and the value we'd like to deliver to the server
    variables: { profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {profile.name}'s friends have endorsed these skills...
      </h2>

      {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

      <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;
