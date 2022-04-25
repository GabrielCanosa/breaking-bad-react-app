import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from '../ui/Navbar';
import CharactersScreen from '../screens/CharactersScreen'
import { HomeScreen } from '../screens/HomeScreen';
import CharacterInformationScreen from '../screens/CharacterInformationScreen';
import DeathsScreen from '../screens/DeathsScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import QuotesScreen from '../screens/QuotesScreen';

export const AppRouter = () => {
    return (
      <div>
        <Navbar />
        <Routes>
            <Route index element={<HomeScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/characters" element={<CharactersScreen />} />
            <Route exact path="/characters/:name" element={<CharacterInformationScreen />} />
            <Route exact path="/deaths" element={<DeathsScreen />} />
            <Route exact path="/episodes" element={<EpisodesScreen />} />
            <Route exact path="/quotes" element={<QuotesScreen />} />
        </Routes>
      </div>
    )
  }