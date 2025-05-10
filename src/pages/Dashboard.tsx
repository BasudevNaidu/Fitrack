import React from 'react';
import Navbar from '../components/layout/Navbar';
import ActivitySummary from '../components/dashboard/ActivitySummary';
import GoalProgress from '../components/dashboard/GoalProgress';
import ActivityChart from '../components/dashboard/ActivityChart';
import RecentWorkouts from '../components/dashboard/RecentWorkouts';
import Card from '../components/ui/Card';
import { Award, Calendar } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back, {user?.name.split(' ')[0]}!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Here's your fitness overview for today
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="mr-2 h-5 w-5" />
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <ActivitySummary className="mb-6" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>
          <div>
            <GoalProgress />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentWorkouts />
          </div>
          <div>
            <Card className="h-full">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-teal-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-500 dark:bg-purple-400 rounded-full flex items-center justify-center text-white">
                    🔥
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">7 Day Streak</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Keep it up!</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gradient-to-r from-teal-500/10 to-teal-500/5 dark:from-teal-500/20 dark:to-teal-500/10 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 bg-teal-500 dark:bg-teal-400 rounded-full flex items-center justify-center text-white">
                    🏃
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">5K Runner</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Completed your first 5K!</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gradient-to-r from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 bg-orange-500 dark:bg-orange-400 rounded-full flex items-center justify-center text-white">
                    💪
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">Strength Master</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">10 strength workouts completed</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;