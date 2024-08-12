import React from 'react';
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyUserAnalysis = () => {
  const data = [
    { name: 'Jan', ActiveUsers: 40, PremiumUsers: 80, NewUsers: 30 },
    { name: 'Feb', ActiveUsers: 50, PremiumUsers: 70, NewUsers: 40 },
    { name: 'Mar', ActiveUsers: 60, PremiumUsers: 100, NewUsers: 50 },
    { name: 'Apr', ActiveUsers: 55, PremiumUsers: 90, NewUsers: 35 },
    { name: 'May', ActiveUsers: 70, PremiumUsers: 95, NewUsers: 60 },
    { name: 'Jun', ActiveUsers: 60, PremiumUsers: 85, NewUsers: 55 },
    { name: 'Jul', ActiveUsers: 80, PremiumUsers: 110, NewUsers: 75 },
    { name: 'Aug', ActiveUsers: 65, PremiumUsers: 105, NewUsers: 50 },
    { name: 'Sep', ActiveUsers: 70, PremiumUsers: 95, NewUsers: 60 },
    { name: 'Oct', ActiveUsers: 75, PremiumUsers: 85, NewUsers: 65 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
         
         
          bottom: 20,
        }}
        barCategoryGap="20%" // Ensures bars are placed at the start and equally spaced
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ActiveUsers" fill="#0088FE" />
        <Bar dataKey="PremiumUsers" fill="#FFBB28" />
        <Bar dataKey="NewUsers" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyUserAnalysis;
