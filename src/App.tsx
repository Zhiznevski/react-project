import React from 'react';
import Button from './shared/components/button/button';

const App: React.FC = () => {
  return (
    <div className="text-center text-2xl">
      Hello, Webpack + TypeScript + React!
      <Button>кнопка</Button>
    </div>
  );
};

export default App;
