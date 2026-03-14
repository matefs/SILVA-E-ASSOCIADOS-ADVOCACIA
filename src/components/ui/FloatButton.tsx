export default function FloatButton() {
  return (
    <a 
      href="https://wa.me/5511987654321" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 hover:-translate-y-1"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
}
