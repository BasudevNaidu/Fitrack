import React from 'react';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Settings, User, Bell, Shield, Moon, LogOut, Award, Calendar, Activity, ChevronRight } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/signin');
  };
  
  // Mock stats
  const stats = [
    { label: 'Workouts', value: '48' },
    { label: 'Streak', value: '7 days' },
    { label: 'Calories', value: '14,320' },
    { label: 'Goals', value: '3/5' },
  ];
  
  // Mock achievements
  const achievements = [
    { id: 1, name: '7 Day Streak', icon: '🔥', date: 'April 28, 2025' },
    { id: 2, name: '5K Runner', icon: '🏃', date: 'April 15, 2025' },
    { id: 3, name: 'Strength Master', icon: '💪', date: 'March 30, 2025' }
  ];
  
  // Mock settings
  const settingsOptions = [
    { id: 'profile', icon: User, name: 'Personal Information' },
    { id: 'notifications', icon: Bell, name: 'Notifications' },
    { id: 'privacy', icon: Shield, name: 'Privacy & Security' },
    { id: 'appearance', icon: Moon, name: 'Appearance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Manage your account and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - User info */}
          <div className="lg:col-span-1">
            {/* User Card */}
            <Card className="text-center mb-6">
              <div className="mx-auto w-32 h-32 relative">
                <img
                  src={user?.profileImage || "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"}
                  alt={user?.name}
                  className="rounded-full w-full h-full object-cover border-4 border-white dark:border-slate-700 shadow-md"
                />
                <button className="absolute bottom-0 right-0 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                  <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              
              <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
              
              <div className="mt-6 flex justify-center space-x-3">
                <button className="flex items-center text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors">
                  <Calendar className="mr-1 h-4 w-4" />
                  Member since Apr 2025
                </button>
              </div>
              
              <div className="mt-6 grid grid-cols-4 border-t border-gray-100 dark:border-gray-700 pt-5">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Achievements Card */}
            <Card className="mb-6">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-teal-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-slate-700/30">
                    <div className="flex-shrink-0 h-10 w-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <span className="text-lg">{achievement.icon}</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{achievement.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                  View all achievements
                </button>
              </div>
            </Card>
            
            {/* Logout Button */}
            <Button
              variant="outline"
              fullWidth
              leftIcon={<LogOut className="h-5 w-5" />}
              onClick={handleLogout}
              className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30"
            >
              Log out
            </Button>
          </div>
          
          {/* Right column - Settings and activity */}
          <div className="lg:col-span-2">
            {/* Settings Card */}
            <Card className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Settings</h3>
              
              <div className="space-y-2">
                {settingsOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div key={option.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mr-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{option.name}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  );
                })}
              </div>
            </Card>
            
            {/* Activity Card */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-teal-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                </div>
                <button className="text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                  View all
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                
                <div className="space-y-8">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 z-10">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Completed Morning Run</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">3.2 miles • 320 calories burned</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Today, 7:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 z-10">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Achieved 7-Day Streak</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Keep it up! You're on a roll.</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday, 10:15 PM</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 z-10">
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Set New Goal</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Run 5K under 25 minutes</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">April 20, 5:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 z-10">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Updated Profile Information</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Changed profile picture and bio</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">April 18, 2:15 PM</p>
                    </div>
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

export default Profile;