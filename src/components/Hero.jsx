import LinearProgress, {
    linearProgressClasses,
  } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import React from 'react'
  
export default function Hero({username, pr}) {
    const loaded = Math.min((pr / 4) * 100, 100)
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15,
        borderRadius: 10,
        width: "100%",
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: "#1717173d", 
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: "#171717", 
        },
      }));

    return (        
    <div className="flex flex-col gap-6 bg-white bg-opacity-10 shadow-md rounded-md p-5 mb-8">
        <h2 className="text-xl sm:text-2xl text-left mb-4">
            Welcome back {username}!
        </h2>
        <div className="flex flex-col gap-5">
            <h4 className="text-sm sm:text-base text-left">
            Your Hacktoberfest Progress
            </h4>
            <BorderLinearProgress variant="determinate" value={loaded} />
            <span className="block text-right text-sm">{loaded}% completed</span>
        </div>
        </div>
)
}
