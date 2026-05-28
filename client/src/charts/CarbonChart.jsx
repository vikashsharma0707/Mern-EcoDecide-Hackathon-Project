import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CarbonChart = () => {
  const data = [
    { day: 'Mon', saved: 12 },
    { day: 'Tue', saved: 18 },
    { day: 'Wed', saved: 8 },
    { day: 'Thu', saved: 25 },
    { day: 'Fri', saved: 15 },
    { day: 'Sat', saved: 22 },
    { day: 'Sun', saved: 19 },
  ];

  return (
    <div className="glass p-6 rounded-3xl">
      <h3 className="text-white text-xl mb-6">Weekly Carbon Saved (kg CO₂)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line 
            type="natural" 
            dataKey="saved" 
            stroke="#4ade80" 
            strokeWidth={4} 
            dot={{ fill: '#4ade80', r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarbonChart;