import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Scheduling from './pages/Scheduling'
import NavBar from './components/NavBar'
import WhatsappFloatingButton from './components/WhatsAppFloatingButton';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const App: React.FC = () => {
      return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agendamento" element={<Scheduling />} />
        </Routes>
        <WhatsappFloatingButton />
        </>
    )
}

export default App;