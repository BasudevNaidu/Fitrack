import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';

interface ActivityChartProps {
  className?: string;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'week' | 'month'>('week');
  
  // Mock data for the chart
  const weekData = [
    { day: 'Mon', steps: 8945, calories: 720 },
    { day: 'Tue', steps: 10232, calories: 890 },
    { day: 'Wed', steps: 7652, calories: 650 },
    { day: 'Thu', steps: 9563, calories: 810 },
    { day: 'Fri', steps: 11245, calories: 970 },
    { day: 'Sat', steps: 6754, calories: 580 },
    { day: 'Sun', steps: 9248, calories: 856 },
  ];
  
  const monthData = [
    { day: 'Week 1', steps: 62500, calories: 5240 },
    { day: 'Week 2', steps: 71300, calories: 6120 },
    { day: 'Week 3', steps: 68900, calories: 5760 },
    { day: 'Week 4', steps: 59700, calories: 4980 },
  ];
  
  const data = activeTab === 'week' ? weekData : monthData;
  const maxSteps = Math.max(...data.map(d => d.steps));
  
  // Animation effect for bars
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Activity Overview</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('week')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'week'
                ? 'bg-teal-500 text-white'
                : 'text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setActiveTab('month')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'month'
                ? 'bg-teal-500 text-white'
                : 'text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400'
            }`}
          >
            Month
          </button>
        </div>
      </div>
      
      <div className="h-64">
        <div className="flex items-end h-full space-x-2">
          {data.map((item, index) => (
            <div key={item.day} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col items-center justify-end h-[calc(100%-30px)] relative group">
                <div
                  className={`w-full bg-teal-500/20 dark:bg-teal-400/20 rounded-t-md relative overflow-hidden transition-all duration-1000 ease-out ${
                    animate ? 'h-[' + (item.steps / maxSteps) * 100 + '%]' : 'h-0'
                  }`}
                  style={{
                    height: animate ? `${(item.steps / maxSteps) * 100}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 w-full bg-teal-500 dark:bg-teal-400 rounded-t-md transition-all duration-1000 ease-out"
                    style={{
                      height: '100%',
                      transform: animate ? 'translateY(0)' : 'translateY(100%)',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                  <div className="font-bold">{item.steps.toLocaleString()} steps</div>
                  <div>{item.calories.toLocaleString()} cal</div>
                </div>
              </div>
              <div className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full mr-2"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Steps</span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {activeTab === 'week' ? 'Last 7 days' : 'Last 4 weeks'}
        </div>
      </div>
    </Card>
  );
};

export default ActivityChart;