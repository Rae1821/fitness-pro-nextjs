
import { connectToDB } from '@utils/database';

import Profile from '@components/profile/Profile'
import ProfileForm from '@components/profile/ProfileForm';
import UserInfo from '@models/profile';


const MyProfile = async ({ params }) => {

    await connectToDB();

    const userInfo = await UserInfo.findById(params.id).populate('creator');





  return (
    <>
     {/* <Profile
        name="My"
        desc="Welcome to your personalized profile page"
      /> */}

      <ProfileForm />

      {/* <div>
        {userInfo.map((info) => (
          <p key={info.id}>{info.weight}</p>
        ))}
      </div> */}
    </>
  )
}

export default MyProfile


