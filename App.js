import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AppNavigation from './navigation/Index';

export default function App() {
  return (
   <ApplicationProvider {...eva} theme={eva.dark}>
    <AppNavigation />
   </ApplicationProvider>
  );
}
