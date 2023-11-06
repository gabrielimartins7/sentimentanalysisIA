import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screen/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        style="dark"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
