import React from 'react';
import { FaChalkboardTeacher, FaCode, FaNetworkWired } from 'react-icons/fa';

const goalsData = [
  {
    id: 1,
    icon: <FaChalkboardTeacher className="text-4xl mb-4 text-blue-500" />,
    title: "Providing Research Guidance and Mentorship",
    description: "We aim to provide Mentorship and Guidance for research, publications and other ethical practices among students.",
  },
  {
    id: 2,
    icon: <FaCode className="text-4xl mb-4 text-blue-500" />,
    title: "Fostering the Culture of Computer Science",
    description: "We aim to foster the culture of coding, developing and contributing by enhancing competitiveness in the institute.",
  },
  {
    id: 3,
    icon: <FaNetworkWired className="text-4xl mb-4 text-blue-500" />,
    title: "Building Networks",
    description: "ACM being an International community leads to diverse network expansion of individuals, by connecting the practitioners and researchers together.",
  },
];

const Goals = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Goals</h2>
      <p className="text-lg text-center mb-8">
        Let’s come together to build a society where coding is in the aura, research in our minds, technology is all hearts and problems all solved.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goalsData.map(goal => (
          <div key={goal.id} className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 border-2 border-blue-500">
            <div className="flex justify-center mb-4">
              {goal.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
            <p className="text-gray-700">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
