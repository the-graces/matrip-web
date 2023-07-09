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
    <gs.MainContainer>
      <iss.MainContainer>
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
      </iss.MainContainer>
    </gs.MainContainer>
  );
};

export default TripSchedule;
