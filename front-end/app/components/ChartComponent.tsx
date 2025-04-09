import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type ChartProps = {
  data: any[];
  xKey: string;
  yKey: string;
};

export default function ChartComponent({ data, xKey, yKey }: ChartProps) {
  return (
    <div className="w-full h-64 mt-6">
      <ResponsiveContainer>
        <BarChart data={data.slice(0, 10)}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yKey} fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
