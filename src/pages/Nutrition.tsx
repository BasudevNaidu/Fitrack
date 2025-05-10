import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressRing from '../components/ui/ProgressRing';
import { Plus, Pizza, Coffee, Utensils, Apple, LineChart, ChevronRight } from 'lucide-react';

const Nutrition: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'meals' | 'log' | 'plan'>('meals');
  
  // Mock data for nutrition
  const nutritionSummary = {
    calories: {
      consumed: 1560,
      goal: 2200,
      progress: 71
    },
    macros: {
      protein: { consumed: 95, goal: 130, progress: 73 },
      carbs: { consumed: 175, goal: 220, progress: 80 },
      fat: { consumed: 48, goal: 73, progress: 66 }
    },
    water: {
      consumed: 1.6,
      goal: 2.5,
      progress: 64
    }
  };
  
  // Mock data for meals
  const meals = [
    {
      id: 1,
      type: 'Breakfast',
      time: '7:30 AM',
      calories: 420,
      items: [
        { name: 'Oatmeal with Berries', calories: 280 },
        { name: 'Greek Yogurt', calories: 120 },
        { name: 'Black Coffee', calories: 20 }
      ],
      icon: Coffee
    },
    {
      id: 2,
      type: 'Lunch',
      time: '12:15 PM',
      calories: 650,
      items: [
        { name: 'Grilled Chicken Salad', calories: 380 },
        { name: 'Whole Grain Bread', calories: 140 },
        { name: 'Apple', calories: 80 },
        { name: 'Water', calories: 0 }
      ],
      icon: Utensils
    },
    {
      id: 3,
      type: 'Snack',
      time: '3:30 PM',
      calories: 180,
      items: [
        { name: 'Trail Mix', calories: 180 }
      ],
      icon: Apple
    },
    {
      id: 4,
      type: 'Dinner',
      time: '7:00 PM',
      calories: 580,
      items: [
        { name: 'Salmon Fillet', calories: 300 },
        { name: 'Quinoa', calories: 120 },
        { name: 'Steamed Vegetables', calories: 90 },
        { name: 'Olive Oil', calories: 70 }
      ],
      icon: Pizza
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Nutrition
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Track your daily meals and nutrient intake
            </p>
          </div>
          <Button variant="primary" leftIcon={<Plus className="h-5 w-5" />}>
            Log Meal
          </Button>
        </div>
        
        {/* Nutrition Summary */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Calories */}
            <Card>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Calories</h3>
                <ProgressRing 
                  progress={nutritionSummary.calories.progress} 
                  size={120} 
                  strokeWidth={12}
                  showPercentage={false}
                />
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {nutritionSummary.calories.consumed}
                    <span className="text-lg text-gray-500 dark:text-gray-400 font-normal"> / {nutritionSummary.calories.goal}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {nutritionSummary.calories.goal - nutritionSummary.calories.consumed} calories remaining
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Macros */}
            <Card className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Macronutrients</h3>
              <div className="space-y-4">
                {/* Protein */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Protein</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {nutritionSummary.macros.protein.consumed}g / {nutritionSummary.macros.protein.goal}g
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${nutritionSummary.macros.protein.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Carbs */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Carbohydrates</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {nutritionSummary.macros.carbs.consumed}g / {nutritionSummary.macros.carbs.goal}g
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${nutritionSummary.macros.carbs.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Fat */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fat</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {nutritionSummary.macros.fat.consumed}g / {nutritionSummary.macros.fat.goal}g
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${nutritionSummary.macros.fat.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="inline-flex items-center text-sm font-medium text-teal-500 cursor-pointer hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                  <LineChart className="w-4 h-4 mr-1" />
                  View detailed nutrition
                </div>
              </div>
            </Card>
            
            {/* Water */}
            <Card>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Water</h3>
                <div className="relative w-20 h-32 flex justify-center">
                  <div className="absolute bottom-0 w-full bg-blue-200 dark:bg-blue-900 rounded-b-lg rounded-t-sm overflow-hidden transition-all duration-1000 ease-out z-10" style={{ height: `${nutritionSummary.water.progress}%` }}>
                    <div className="absolute inset-0 bg-blue-400 dark:bg-blue-600 opacity-50 wave-animation z-10"></div>
                  </div>
                  <div className="absolute inset-0 border-2 border-blue-300 dark:border-blue-700 rounded-lg z-20"></div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {nutritionSummary.water.consumed}L
                    <span className="text-base text-gray-500 dark:text-gray-400 font-normal"> / {nutritionSummary.water.goal}L</span>
                  </div>
                  <button className="mt-2 text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                    + Add water
                  </button>
                </div>
              </div>
              <style jsx>{`
                .wave-animation {
                  background: linear-gradient(45deg, rgba(59, 130, 246, 0.5) 25%, transparent 25%, transparent 50%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.5) 75%, transparent 75%, transparent);
                  background-size: 20px 20px;
                  animation: wave 2s linear infinite;
                }
                
                @keyframes wave {
                  0% { background-position: 0 0; }
                  100% { background-position: 20px 20px; }
                }
              `}</style>
            </Card>
          </div>
        </section>
        
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('meals')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'meals'
                  ? 'border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Today's Meals
            </button>
            <button
              onClick={() => setActiveTab('log')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'log'
                  ? 'border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Food Log
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'plan'
                  ? 'border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Meal Plans
            </button>
          </nav>
        </div>
        
        {/* Meals List */}
        {activeTab === 'meals' && (
          <div className="space-y-6">
            {meals.map((meal) => {
              const Icon = meal.icon;
              return (
                <Card key={meal.id} hover>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-4 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{meal.type}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{meal.time}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-gray-900 dark:text-white">{meal.calories} cal</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        {meal.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                            <span className="text-gray-600 dark:text-gray-400">{item.calories} cal</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                      Edit meal
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </Card>
              );
            })}
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" leftIcon={<Plus className="h-5 w-5" />}>
                Add Another Meal
              </Button>
            </div>
          </div>
        )}
        
        {/* Placeholder content for other tabs */}
        {activeTab === 'log' && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Food Log History</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">View and analyze your past nutrition data</p>
            <Button variant="primary">View History</Button>
          </div>
        )}
        
        {activeTab === 'plan' && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Meal Plans</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Create and manage your personalized meal plans</p>
            <Button variant="primary">Create Plan</Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Nutrition;