import React, { useState } from 'react';
import { Menu, X} from 'lucide-react';
import Logo from '../assets/logo-without-text.png';
import { Link } from 'react-router-dom'

const Links: React.FC = () => {
    return (
        <>
            <Link to="/#inicio" className="text-gray-700 hover:text-rose-600 transition-colors">Início</Link>
            <Link to="/#servicos" className="text-gray-700 hover:text-rose-600 transition-colors">Serviços</Link>
            <Link to="/#sobre" className="text-gray-700 hover:text-rose-600 transition-colors">Sobre</Link>
            <Link to="/#depoimentos" className="text-gray-700 hover:text-rose-600 transition-colors">Depoimentos</Link>
            <Link to="/#contato" className="text-gray-700 hover:text-rose-600 transition-colors">Contato</Link>
            <Link to="/agendamento#inicio" className="text-gray-700 hover:text-rose-600 transition-colors">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Agendamento</span>
            </Link>   
        </>
    )
}
const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <img
                    src={Logo}
                    alt="Design workspace"
                    className="w-full h-full object-cover"
                    />
              </div>
              <div id="title">
                <h1 className="text-xl font-bold text-gray-900">Rosy Arruda</h1>
                <p className="text-sm text-gray-600">Massagem | Massoterapia | Aromaterapia</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
                <Links />
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Links />
              </nav>
            </div>
          )}
        </div>
      </header>
    );
}

export default NavBar;