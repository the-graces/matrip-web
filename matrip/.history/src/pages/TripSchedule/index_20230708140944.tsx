import React from "react";
import styled from "styled-components";
import { MdOutlineMan4 } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./index.scss";

import * as iss from "./TripScheduleStyle";
import * as gs from "../../styles/GlobalStyles";
import "./index.scss";
import { fdata } from "../../data/userdata";

const TripSchedule: React.FC = () => {
  return (
    <iss.MainContainer>
      <iss.MainBox>
        {fdata.map((friend, index) => (
          <iss.TripSchedule key={index}>
            <iss.TripSchedule>
              <iss.TripSchedule>
              </iss.TripSchedule>
              <iss.TripSchedule>{friend.nick}</iss.TripSchedule>
            </iss.TripSchedule>
            <iss.TripSchedule>
              <iss.TripSchedule>{friend.id}</iss.TripSchedule>
            </iss.TripSchedule>
          </iss.TripSchedule>
        ))}
      </iss.MainBox>
    </iss.MainContainer>
  );
};

export default TripSchedule;
