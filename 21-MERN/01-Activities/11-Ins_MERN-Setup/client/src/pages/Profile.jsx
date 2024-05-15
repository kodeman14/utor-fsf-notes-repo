import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();

  console.log(useParams());

  const { loading, data, error } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  useEffect(() => {
    if (data) {
      setProfile(data?.profile);
    }
  }, [data, profile]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("error", data);

  if (error) {
    return <div>Error something</div>;
  }
  return (
    <>
      {profile ? (
        <div>
          <h2 className="card-header">
            {profile.name}&apos;s friends have endorsed these skills...
          </h2>

          {/* profile && profile.skills && profile.skills.length */}
          {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

          <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
            <SkillForm profileId={profile._id} />
          </div>
        </div>
      ) : (
        <div>Error: profile does not exist</div>
      )}
    </>
  );
};

export default Profile;
