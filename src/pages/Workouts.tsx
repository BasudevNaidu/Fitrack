import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Plus, Calendar, Filter, List, GridIcon, ArrowLeft, ArrowRight } from 'lucide-react';

const Workouts: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock data for workout categories
  const categories = [
    {
      id: 1,
      name: 'Cardio',
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 18
    },
    {
      id: 2,
      name: 'Strength',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 24
    },
    {
      id: 3,
      name: 'Yoga',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 12
    },
    {
      id: 4,
      name: 'HIIT',
      image: 'https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 15
    },
    {
      id: 5,
      name: 'Pilates',
      image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 8
    },
    {
      id: 6,
      name: 'Cycling',
      image: 'https://images.pexels.com/photos/1130609/pexels-photo-1130609.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 10
    }
  ];
  
  // Mock data for recent workouts
  const recentWorkouts = [
    {
      id: 1,
      name: 'Morning Run',
      category: 'Cardio',
      date: 'Today',
      duration: '32 min',
      calories: 320,
      intensity: 'Moderate'
    },
    {
      id: 2,
      name: 'Upper Body Strength',
      category: 'Strength',
      date: 'Yesterday',
      duration: '45 min',
      calories: 380,
      intensity: 'High'
    },
    {
      id: 3,
      name: 'Yoga Flow',
      category: 'Yoga',
      date: '2 days ago',
      duration: '50 min',
      calories: 220,
      intensity: 'Low'
    },
    {
      id: 4,
      name: 'HIIT Session',
      category: 'HIIT',
      date: '3 days ago',
      duration: '28 min',
      calories: 410,
      intensity: 'High'
    },
    {
      id: 5,
      name: 'Evening Cycle',
      category: 'Cycling',
      date: '5 days ago',
      duration: '65 min',
      calories: 560,
      intensity: 'Moderate'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Workouts
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Browse and track your fitness activities
            </p>
          </div>
          <Button variant="primary" leftIcon={<Plus className="h-5 w-5" />}>
            New Workout
          </Button>
        </div>
        
        {/* Categories */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Categories</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-md text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-md text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-lg font-semibold text-white">{category.name}</p>
                  <p className="text-sm text-gray-200">{category.count} workouts</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Recent Workouts */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Workouts</h2>
            <div className="flex space-x-2">
              <Button variant="outline" leftIcon={<Calendar className="h-4 w-4" />} size="sm">
                Date
              </Button>
              <Button variant="outline" leftIcon={<Filter className="h-4 w-4" />} size="sm">
                Filter
              </Button>
              <div className="ml-4 flex border border-gray-300 dark:border-gray-600 rounded-md">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-slate-700 text-teal-500' : 'text-gray-500 dark:text-gray-400'} rounded-l-md`}
                >
                  <List className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-slate-700 text-teal-500' : 'text-gray-500 dark:text-gray-400'} rounded-r-md`}
                >
                  <GridIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentWorkouts.map((workout) => (
                <Card key={workout.id} hover>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{workout.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{workout.category}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{workout.date}</span>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="bg-gray-100 dark:bg-slate-700 rounded-full px-3 py-1 text-sm">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{workout.duration}</span>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-700 rounded-full px-3 py-1 text-sm">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{workout.calories} cal</span>
                    </div>
                    <div className={`rounded-full px-3 py-1 text-sm ${
                      workout.intensity === 'High' 
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400' 
                        : workout.intensity === 'Moderate'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                    }`}>
                      {workout.intensity}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="ghost" size="sm">Log Again</Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {recentWorkouts.map((workout) => (
                <Card key={workout.id} hover className="p-0">
                  <div className="flex justify-between items-center p-4">
                    <div className="flex items-center">
                      <div className={`w-2 h-12 rounded-r-full mr-4 ${
                        workout.category === 'Cardio' ? 'bg-blue-500' :
                        workout.category === 'Strength' ? 'bg-purple-500' :
                        workout.category === 'Yoga' ? 'bg-green-500' :
                        workout.category === 'HIIT' ? 'bg-red-500' :
                        workout.category === 'Pilates' ? 'bg-pink-500' :
                        'bg-orange-500'
                      }`}></div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{workout.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{workout.category} • {workout.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600 dark:text-gray-300 text-right">
                        <div>{workout.duration}</div>
                        <div>{workout.calories} cal</div>
                      </div>
                      <div className={`rounded-full px-3 py-1 text-sm ${
                        workout.intensity === 'High' 
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400' 
                          : workout.intensity === 'Moderate'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                          : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                      }`}>
                        {workout.intensity}
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Workouts;