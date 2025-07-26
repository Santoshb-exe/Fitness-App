import React from 'react';
import WorkoutProgram from './components/WorkoutProgram';
import CoreToggle from './components/CoreToggle';
import Heatmap from './components/Heatmap';
import ProgressForm from './components/ProgressForm';

const App: React.FC = () => {
  return (
    <div className="p-4 space-y-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Anime Fitness Tracker</h1>
      <WorkoutProgram />
      <CoreToggle />
      <Heatmap />
      <ProgressForm />
    </div>
  );
};

export default App;
