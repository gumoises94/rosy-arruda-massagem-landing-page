import React, { useState } from 'react';
import { Smartphone , Instagram, MapPin, Heart, Home, Flower, Menu, X, Star, Clock, Award } from 'lucide-react';
import Logo from './assets/logo-without-text.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Aromaterapia",
      description: "Terapia através de óleos essenciais naturais que promovem relaxamento profundo e equilíbrio emocional.",
      benefits: ["Reduz stress e ansiedade", "Melhora a qualidade do sono", "Equilibra as emoções"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Massoterapia Humanizada",
      description: "Técnicas de massagem terapêutica com abordagem humanizada, focando no bem-estar integral do cliente.",
      benefits: ["Alívio de dores musculares", "Melhora da circulação", "Relaxamento profundo"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Atendimento Home Care",
      description: "Serviços de massoterapia no conforto da sua casa, proporcionando comodidade e privacidade.",
      benefits: ["Conforto do seu lar", "Horários flexíveis", "Atendimento personalizado"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente profissional! A Rosy tem mãos mágicas e um atendimento muito humanizado. Recomendo!",
      rating: 5
    },
    {
      name: "João Santos",
      text: "O atendimento home care é fantástico. Muito prático e a qualidade do serviço é excepcional.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "A aromaterapia da Rosy me ajudou muito com a ansiedade. Profissional dedicada e competente.",
      rating: 5
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5519995332203"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre seus serviços.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <a href="#inicio" className="text-gray-700 hover:text-rose-600 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-rose-600 transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-rose-600 transition-colors">Sobre</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-rose-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-rose-600 transition-colors">Contato</a>
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
                <a href="#inicio" className="text-gray-700 hover:text-rose-600 transition-colors">Início</a>
                <a href="#servicos" className="text-gray-700 hover:text-rose-600 transition-colors">Serviços</a>
                <a href="#sobre" className="text-gray-700 hover:text-rose-600 transition-colors">Sobre</a>
                <a href="#depoimentos" className="text-gray-700 hover:text-rose-600 transition-colors">Depoimentos</a>
                <a href="#contato" className="text-gray-700 hover:text-rose-600 transition-colors">Contato</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Bem-estar e 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600"> Equilíbrio</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubra o poder transformador da massoterapia humanizada. 
                Cuidado especializado para seu corpo, mente e espírito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contato" 
                  className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Agendar Consulta
                </a>
                <a 
                  href="#servicos" 
                  className="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-colors text-center"
                >
                  Conhecer Serviços
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-3xl flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Massoterapia relaxante" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-rose-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Certificada</p>
                    <p className="text-sm text-gray-600">Profissional qualificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de terapias especializadas para promover seu bem-estar físico e emocional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-rose-500 mb-6">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/6187656/pexels-photo-6187656.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Rosy Arruda - Massoterapeuta" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Sobre Rosy Arruda</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Com mais de 10 anos de experiência em massoterapia, Rosy Arruda é uma profissional dedicada 
                ao bem-estar e qualidade de vida de seus clientes. Especializada em técnicas humanizadas, 
                ela combina conhecimento técnico com sensibilidade e cuidado.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sua abordagem única integra aromaterapia, massoterapia terapêutica e atendimento personalizado, 
                sempre respeitando as necessidades individuais de cada pessoa.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-rose-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Clientes Atendidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h3>
            <p className="text-xl text-gray-600">Depoimentos reais de pessoas que transformaram seu bem-estar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-600">Agende sua sessão e comece sua jornada de bem-estar</p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Informações de Contato</h4>

                <div className="grid grid-cols-2 gap-6">
                  {/* Coluna Esquerda - Localização e Horário */}
                  <div className="space-y-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
                        <Smartphone className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Celular/WhatsApp</p>
                        <p className="text-gray-600 text-sm">
                            <a href="https://wa.me/5519995332203" target="_blank"
                                className="text-blue-400 hover:text-blue-700">
                                (19) 99533-2203
                            </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
                        <Instagram className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Instagram</p>
                        <p className="text-gray-600 text-sm">
                            <a href="https://www.instagram.com/rosyarrudamassagem" target="_blank" className="text-blue-400 hover:text-blue-700">
                                @rosyarrudamassagem
                            </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
                        <MapPin className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Local de Atendimento</p>
                        <p className="text-gray-600 text-sm">Região Metropolitana de Campinas- SP</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
                        <Clock className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Horário de Atendimento</p>
                        <p className="text-gray-600 text-sm">Segunda a Sábado</p>
                        <p className="text-gray-600 text-sm">8h às 18h</p>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita - Telefone e E-mail */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Contato via WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco no WhatsApp
        </div>
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <img
                    src={Logo}
                    alt="Design workspace"
                    className="w-full h-full object-cover"
                    />
              </div>
              <div>
                <h5 className="text-xl font-bold">Rosy Arruda Massagem</h5>
              </div>
            </div>
            <p className="text-gray-400 mb-6">Cuidando do seu bem-estar com carinho e profissionalismo</p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Rosy Arruda Massagem. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;