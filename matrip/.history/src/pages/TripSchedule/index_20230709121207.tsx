import React from "react";
import "./index.scss";

import * as iss from "./TripScheduleStyle";
import * as gs from "../../styles/GlobalStyles";
import "./index.scss";
import { fdata } from "../../data/userdata";

const TripSchedule: React.FC = () => {
  return (
    <gs.MainContainer>
      <iss.MainContainer>
        <iss.TripSchedulePost>

        </iss.TripSchedulePost>

        <iss.TripSchedulePostButton>

        </iss.TripSchedulePostButton>

        {fdata.map((friend, index) => (
          <iss.TripScheduleAppList key={index}>
            <iss.TripScheduleAppList>
              <iss.TripScheduleAppList>
              </iss.TripScheduleAppList>
              <iss.TripScheduleAppList>{friend.nick}</iss.TripScheduleAppList>
            </iss.TripScheduleAppList>
            <iss.TripScheduleAppList>
              <iss.TripScheduleAppList>{friend.id}</iss.TripScheduleAppList>
            </iss.TripScheduleAppList>
          </iss.TripScheduleAppList>
        ))}
      </iss.MainContainer>
    </gs.MainContainer> 
  );
};

export default TripSchedule;
