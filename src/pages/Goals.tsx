import React from 'react';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressRing from '../components/ui/ProgressRing';
import { Plus, Target, Clock, Calendar, Award, TrendingUp, CheckCircle, X } from 'lucide-react';

const Goals: React.FC = () => {
  // Mock data for goals
  const activeGoals = [
    {
      id: 1,
      title: 'Run 5K under 25 minutes',
      category: 'Cardio',
      deadline: 'May 15, 2025',
      progress: 75,
      nextMilestone: 'Run 4K under 21 minutes',
      daysLeft: 21
    },
    {
      id: 2,
      title: 'Lose 10 pounds',
      category: 'Weight',
      deadline: 'June 30, 2025',
      progress: 60,
      nextMilestone: '2 more pounds to go',
      daysLeft: 65
    },
    {
      id: 3,
      title: 'Bench press 200 lbs',
      category: 'Strength',
      deadline: 'July 30, 2025',
      progress: 40,
      nextMilestone: 'Current max: 175 lbs',
      daysLeft: 98
    }
  ];
  
  const completedGoals = [
    {
      id: 4,
      title: 'Complete 30-day yoga challenge',
      category: 'Flexibility',
      completedDate: 'April 10, 2025'
    },
    {
      id: 5,
      title: 'Run a half marathon',
      category: 'Cardio',
      completedDate: 'March 22, 2025'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Goals
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Track your progress and achieve your fitness targets
            </p>
          </div>
          <Button variant="primary" leftIcon={<Plus className="h-5 w-5" />}>
            Create Goal
          </Button>
        </div>
        
        {/* Goal Summary */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 border-none">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-4">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Goals</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeGoals.length}</h3>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-none">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Completed Goals</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{completedGoals.length}</h3>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border-none">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Goal Success Rate</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">75%</h3>
                </div>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Active Goals */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-teal-500" />
              Active Goals
            </h2>
            <div className="flex items-center">
              <button className="text-sm font-medium text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                View Calendar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activeGoals.map((goal) => (
              <Card key={goal.id} hover className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full ${
                  goal.category === 'Cardio' ? 'bg-blue-500' :
                  goal.category === 'Weight' ? 'bg-purple-500' :
                  goal.category === 'Strength' ? 'bg-orange-500' :
                  'bg-green-500'
                }`}></div>
                
                <div className="pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${
                        goal.category === 'Cardio' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        goal.category === 'Weight' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                        goal.category === 'Strength' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      }`}>
                        {goal.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{goal.title}</h3>
                    </div>
                    <ProgressRing 
                      progress={goal.progress} 
                      size={60} 
                      strokeWidth={6} 
                      primaryColor={
                        goal.category === 'Cardio' ? '#3B82F6' :
                        goal.category === 'Weight' ? '#8B5CF6' :
                        goal.category === 'Strength' ? '#F97316' :
                        '#10B981'
                      }
                    />
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{goal.daysLeft} days left • Due {goal.deadline}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Next milestone: {goal.nextMilestone}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" size="sm">Update Progress</Button>
                    <Button variant="ghost" size="sm">Details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Completed Goals */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            Completed Goals
          </h2>
          
          <div className="space-y-4">
            {completedGoals.map((goal) => (
              <Card key={goal.id} hover className="bg-gray-50 dark:bg-slate-800/50 border-green-100 dark:border-green-900/30">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{goal.title}</h3>
                      <div className="flex items-center text-sm">
                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mr-2 ${
                          goal.category === 'Cardio' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          goal.category === 'Flexibility' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                        }`}>
                          {goal.category}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Completed on {goal.completedDate}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Goals;