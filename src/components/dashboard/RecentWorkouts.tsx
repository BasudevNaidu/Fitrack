import React from 'react';
import Card from '../ui/Card';
import { Clock, Dumbbell, Flame } from 'lucide-react';

interface RecentWorkoutsProps {
  className?: string;
}

const RecentWorkouts: React.FC<RecentWorkoutsProps> = ({ className = '' }) => {
  // Mock data for demonstration
  const workouts = [
    {
      id: 1,
      name: 'Morning Run',
      type: 'Cardio',
      date: 'Today, 7:30 AM',
      duration: '32 min',
      calories: 320,
      intensity: 'Moderate'
    },
    {
      id: 2,
      name: 'Upper Body Strength',
      type: 'Strength',
      date: 'Yesterday, 6:15 PM',
      duration: '45 min',
      calories: 380,
      intensity: 'High'
    },
    {
      id: 3,
      name: 'Yoga Session',
      type: 'Flexibility',
      date: '2 days ago, 8:00 AM',
      duration: '50 min',
      calories: 220,
      intensity: 'Low'
    }
  ];

  return (
    <Card className={className}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <Dumbbell className="mr-2 h-5 w-5 text-teal-500" />
          Recent Workouts
        </h3>
        <a href="/workouts" className="text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
          View all
        </a>
      </div>
      
      <div className="space-y-4">
        {workouts.map((workout) => (
          <div 
            key={workout.id} 
            className="p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
          >
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{workout.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{workout.type}</p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">{workout.date}</span>
            </div>
            
            <div className="mt-2 flex items-center text-sm space-x-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="h-4 w-4 mr-1" />
                {workout.duration}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Flame className="h-4 w-4 mr-1" />
                {workout.calories} cal
              </div>
              <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                workout.intensity === 'High' 
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400' 
                  : workout.intensity === 'Moderate'
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                  : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
              }`}>
                {workout.intensity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentWorkouts;