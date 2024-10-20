import React from 'react';
import { Avatar } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export const dataset = [
    { day: 'Mon', seoul: 3 },
    { day: 'Tue', seoul: 2 },
    { day: 'Wed', seoul: 5 },
    { day: 'Thu', seoul: 4 },
    { day: 'Fri', seoul: 2 },
    { day: 'Sat', seoul: 1 },
    { day: 'Sun', seoul: 8 },
];

export const valueFormatter = (value) => `${value} contributions`;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  width: '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
  },
}));

const chartSetting = {
  yAxis: [
    {
      label: 'Contributions',
    },
  ],
  series: [{ dataKey: 'seoul', label: 'Contribution Activity', valueFormatter }],
  height: 300,
  xAxis: [{ dataKey: 'day', scaleType: 'band', label: 'Day of the Week' }],
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

const DashboardPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-0">Hacktoberfest Dashboard</h1>
          <Avatar src="/broken-image.jpg" />
        </div>

        <div className="bg-gray-200 rounded-md p-4 mb-8">
          <h2 className="text-xl sm:text-2xl text-center mb-4">Welcome back Abiral Jain</h2>
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base">Your Hacktoberfest Progress</h4>
            <BorderLinearProgress variant="determinate" value={90} />
            <span className="block text-right text-sm">90% completed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { title: 'Pull Requests', icon: <GitHubIcon />, value: 0 },
            { title: 'Issues Raised', icon: <BugReportIcon />, value: 10 },
            { title: 'Stars Gained', icon: <StarBorderIcon />, value: 20 },
            { title: 'Repos Contributed', icon: <CodeIcon />, value: 10 },
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm sm:text-base">{item.title}</div>
                <div>{item.icon}</div>
              </div>
              <div className="text-2xl sm:text-3xl text-center">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 bg-transparent border border-black rounded-lg p-4">
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: 'band', dataKey: 'day', tickPlacement: 'middle', tickLabelPlacement: 'middle', label: 'Days of the Week' }]}
              {...chartSetting}
            />
          </div>
          <div className="w-full lg:w-1/2 bg-gray-200 rounded-lg p-4">
            <h2 className="text-lg mb-4">Recent Activity</h2>
            <div className="space-y-2">
              {[
                'Fixed a typo in the documentation.',
                'Added a dark mode toggle to the dashboard.',
                'Optimized database queries to reduce load time.',
                'Updated API documentation for the new release.',
              ].map((activity, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded-lg text-sm">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;