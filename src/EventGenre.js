import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = ["#800020", "#555555", "#000080", "#333333", "#4B0082"];

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.toUpperCase().includes(genre.toUpperCase())
      ).length;
      return { name: genre, value };
    });
    return data.filter((entry) => entry.value > 0);
  };

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={89}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={76} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
