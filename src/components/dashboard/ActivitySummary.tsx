import React from 'react';
import { CalendarClock, Flame, Footprints, HeartPulse } from 'lucide-react';
import Card from '../ui/Card';

interface ActivitySummaryProps {
  className?: string;
}

const ActivitySummary: React.FC<ActivitySummaryProps> = ({ className = '' }) => {
  // Mock data for demonstration
  const stats = [
    { 
      id: 1, 
      name: 'Steps', 
      value: '9,248', 
      change: '+12%', 
      isPositive: true, 
      icon: Footprints,
      color: 'bg-blue-500/10 text-blue-500' 
    },
    { 
      id: 2, 
      name: 'Calories', 
      value: '856', 
      change: '+3%', 
      isPositive: true, 
      icon: Flame,
      color: 'bg-orange-500/10 text-orange-500' 
    },
    { 
      id: 3, 
      name: 'Active Minutes', 
      value: '68', 
      change: '-8%', 
      isPositive: false, 
      icon: CalendarClock,
      color: 'bg-purple-500/10 text-purple-500' 
    },
    { 
      id: 4, 
      name: 'Avg Heart Rate', 
      value: '72', 
      change: '-2%', 
      isPositive: true, 
      icon: HeartPulse,
      color: 'bg-red-500/10 text-red-500' 
    },
  ];

  return (
    <div className={className}>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Today's Activity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.id} hover className="border-l-4 border-l-teal-500 dark:border-l-teal-400">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <div className={`mt-1 inline-flex items-center text-sm ${stat.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {stat.change}
                    <span className="ml-1 text-xs">from yesterday</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitySummary;