import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const handleWhatsAppClick = () => {
    const phoneNumber = "5519995332203"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre seus serviços.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

const WhatsappFloatingButton: React.FC = () => {
    return (
        <>
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
        </>
    )
    
}

export default WhatsappFloatingButton;