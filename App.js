import React from 'react';
import App1 from './App1';
import { View } from 'react-native';
import ValidProvider from './context/valid';

export default function App() {

  return (
      <View>
          <ValidProvider>
              <App1/>
           </ValidProvider>
      </View>
  );
}