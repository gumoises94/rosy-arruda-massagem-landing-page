import React from 'react'
import ScrollToHashElement from '../components/ScrollToHashElement'

const Scheduling: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
        <ScrollToHashElement />
        <section id="inicio" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50" style={{ margin: '1em auto auto auto' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="grid lg:grid-cols-1 gap-12">
            <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Agende sua Consulta</h4>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Agende seu atendimento e entraremos em contato
                </p>
                <form className="space-y-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                        placeholder="Seu nome completo"
                    />
                    </div>
                    
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Celular/Whatsapp</label>
                    <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                        placeholder="(19) 99999-9999"
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                        placeholder="Conte-nos um pouco sobre suas necessidades..."
                    ></textarea>
                    </div>

                    <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                    Agendar Consulta
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Scheduling