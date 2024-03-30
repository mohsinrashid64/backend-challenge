import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import populationChartConfig from '../utils/populationChartConfig';

const Graph = ({ currentYearData }) => {
  const [series, setSeries] = useState([]);
  
  useEffect(() => {
    const calculatePercentages = (data) => {
      const totalMale = Object.values(data)
        .slice(0, 5) // Select only male population data
        .reduce((acc, val) => acc + val, 0);
      
      const totalFemale = Object.values(data)
        .slice(5) // Select only female population data
        .reduce((acc, val) => acc + val, 0);
      
      return {
        Males: Object.values(data)
          .slice(0, 5)
          .map(val => (-val / totalMale) * 100),
        Females: Object.values(data)
          .slice(5)
          .map(val => (val / totalFemale) * 100)
      };
    };

    if (currentYearData) {
      const { population_65plus_male, population_25to64_male, population_15to24_male, population_5to14_male, population_0to4_male,
              population_65plus_female, population_25to64_female, population_15to24_female, population_5to14_female, population_0to4_female } = currentYearData;
      
      const percentages = calculatePercentages({
        population_65plus_male, population_25to64_male, population_15to24_male, population_5to14_male, population_0to4_male,
        population_65plus_female, population_25to64_female, population_15to24_female, population_5to14_female, population_0to4_female
      });
      
      setSeries([
        { name: 'Males', data: percentages.Males },
        { name: 'Females', data: percentages.Females }
      ]);
    }
  }, [currentYearData]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={populationChartConfig}
            series={series}
            type="bar"
            width="800"
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
