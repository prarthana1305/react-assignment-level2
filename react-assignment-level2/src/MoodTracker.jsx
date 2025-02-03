import React, { useState } from 'react';
import { Trash2, RotateCcw, BarChart2, List } from 'lucide-react';

const MoodTracker = () => {
  // State management
  const [moods, setMoods] = useState([
    { id: 1, mood: 'Happy', timestamp: '2024-02-03 09:00' },
    { id: 2, mood: 'Calm', timestamp: '2024-02-03 14:30' },
    { id: 3, mood: 'Energetic', timestamp: '2024-02-03 18:45' },
  ]);
  const [deletedMood, setDeletedMood] = useState(null);
  const [activeTab, setActiveTab] = useState('list');

  // Delete mood entry
  const handleDelete = (moodId) => {
    const moodToDelete = moods.find(mood => mood.id === moodId);
    setDeletedMood(moodToDelete);
    setMoods(moods.filter(mood => mood.id !== moodId));
  };

  // Undo last deletion
  const handleUndo = () => {
    if (deletedMood) {
      setMoods([...moods, deletedMood]);
      setDeletedMood(null);
    }
  };

  // Tab components
  const MoodList = () => (
    <div className="space-y-4">
      {moods.map((mood) => (
        <div 
          key={mood.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div>
            <div className="font-medium">{mood.mood}</div>
            <div className="text-sm text-gray-500">{mood.timestamp}</div>
          </div>
          <button
            onClick={() => handleDelete(mood.id)}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Delete mood"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      
      {deletedMood && (
        <div className="fixed bottom-4 left-4 right-4 flex items-center justify-between p-4 bg-gray-800 text-white rounded-lg shadow-lg">
          <span>Entry deleted</span>
          <button
            onClick={handleUndo}
            className="flex items-center space-x-2 text-blue-300 hover:text-blue-200"
          >
            <RotateCcw size={16} />
            <span>Undo</span>
          </button>
        </div>
      )}
    </div>
  );

  const MoodAnalytics = () => (
    <div className="p-8 text-center bg-white rounded-lg shadow">
      <BarChart2 className="mx-auto mb-4 text-gray-400" size={48} />
      <h3 className="text-xl font-medium text-gray-700">Analytics Coming Soon</h3>
      <p className="text-gray-500">
        This section will display mood trends and insights in the next update.
      </p>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('list')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-colors ${
            activeTab === 'list'
              ? 'bg-white text-blue-600 shadow'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          <List size={20} />
          <span>Mood List</span>
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-colors ${
            activeTab === 'analytics'
              ? 'bg-white text-blue-600 shadow'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          <BarChart2 size={20} />
          <span>Analytics</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'list' ? <MoodList /> : <MoodAnalytics />}
      </div>
    </div>
  );
};

export default MoodTracker;