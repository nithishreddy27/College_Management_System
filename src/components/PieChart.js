import React from 'react';
import dynamic from 'next/dynamic';
const DynamicDoughnut = dynamic(() => import('react-chartjs-2').then(mod => mod.Doughnut), { ssr: false });

const PieChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <DynamicDoughnut data={data} options={options} />;
};

export default PieChart;
