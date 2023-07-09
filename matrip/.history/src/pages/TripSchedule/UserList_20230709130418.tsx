import React from "react";
import "./index.scss";

import * as iss from "./TripScheduleStyle";
import "./index.scss";
import { fdata } from "../../data/userdata";

const UserList: React.FC = () => {
  return (
        {fdata.map((friend, index) => (
          <iss.TripScheduleAppList key={index}>
            <iss.TripScheduleAppList>
              <iss.TripScheduleAppList>
                <iss.profileImg src={friend.imgurl} alt="유저 프로필" />
              </iss.TripScheduleAppList>
              <iss.TripScheduleAppList>{friend.nick}</iss.TripScheduleAppList>
            </iss.TripScheduleAppList>
            <iss.TripScheduleAppList>
              <iss.TripScheduleAppList>{friend.id}</iss.TripScheduleAppList>
            </iss.TripScheduleAppList>
          </iss.TripScheduleAppList>
        ))}
  )
}

export default UserList;
