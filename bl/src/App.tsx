import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Onboarding } from './components/Onboarding';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Read from './pages/Read';
import ReadDetail from './pages/ReadDetail';
import Practice from './pages/Practice';
import PracticeListen from './pages/PracticeListen';
import PracticeSpell from './pages/PracticeSpell';
import PracticeReading from './pages/PracticeReading';
import PracticeLevels from './pages/PracticeLevels';
import AICompanion from './pages/AICompanion';
import Growth from './pages/Growth';
import Profile from './pages/Profile';
import ParentCenter from './pages/ParentCenter';
import TeacherCenter from './pages/TeacherCenter';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <Onboarding />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="read" element={<Read />} />
          <Route path="grow" element={<Growth />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        
        {/* Full screen pages */}
        <Route path="/read-detail" element={<ReadDetail />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/listen" element={<PracticeListen />} />
        <Route path="/practice/spell" element={<PracticeSpell />} />
        <Route path="/practice/reading" element={<PracticeReading />} />
        <Route path="/practice/levels" element={<PracticeLevels />} />
        <Route path="/ai" element={<AICompanion />} />
        <Route path="/parent" element={<ParentCenter />} />
        <Route path="/teacher" element={<TeacherCenter />} />
      </Routes>
      <Toaster position="top-center" expand={false} richColors />
    </>
  );
}
