
import { connectToDB } from '@utils/database';

import Profile from '@components/profile/Profile'
// import ProfileForm from '@components/profile/ProfileForm';
// import UserInfo from '@models/userInfo';
// import { userInfoList } from '@actions/actions.js';


const MyProfile = async () => {


    const { userInfoList } = await userInfoList();





  return (
    <>
     {/* <Profile
        name="My"
        desc="Welcome to your personalized profile page"
      /> */}

      {/* <ProfileForm /> */}

      <div>
        <h1>My Current Personal Info</h1>
        {/* <div className="mb-4">
          {userInfoList ? <Table userInfoList={userInfoList} /> : "null" }
        </div> */}
      </div>
      {/* <div>
        {userInfo.map((info) => (
          <p key={info.id}>{info.weight}</p>
        ))}
      </div> */}
    </>
  )
}

export default MyProfile


