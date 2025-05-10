import React from 'react';
import Card from '../ui/Card';
import ProgressRing from '../ui/ProgressRing';
import { TrendingUp } from 'lucide-react';

interface GoalProgressProps {
  className?: string;
}

const GoalProgress: React.FC<GoalProgressProps> = ({ className = '' }) => {
  // Mock data for demonstration
  const goals = [
    { id: 1, name: 'Daily Steps', current: 9248, target: 10000, unit: 'steps', progress: 92 },
    { id: 2, name: 'Active Minutes', current: 68, target: 150, unit: 'min', progress: 45 },
    { id: 3, name: 'Calories Burned', current: 856, target: 1200, unit: 'cal', progress: 71 },
  ];

  return (
    <div className={className}>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <TrendingUp className="mr-2 h-5 w-5 text-teal-500" />
        Goal Progress
      </h2>
      <div className="space-y-4">
        {goals.map((goal) => (
          <Card key={goal.id} hover className="overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{goal.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">{goal.current.toLocaleString()}</span> / {goal.target.toLocaleString()} {goal.unit}
                </p>
                <div className="mt-2 hidden sm:block">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    goal.progress >= 100 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                      : goal.progress >= 70
                      ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400'
                      : goal.progress >= 40
                      ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                  }`}>
                    {goal.progress}% complete
                  </div>
                </div>
              </div>
              
              <ProgressRing 
                progress={goal.progress} 
                size={90} 
                strokeWidth={8} 
                primaryColor={
                  goal.progress >= 100 
                    ? '#10B981'
                    : goal.progress >= 70
                    ? '#0BCEAF'
                    : goal.progress >= 40
                    ? '#F59E0B'
                    : '#EF4444'
                }
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoalProgress;