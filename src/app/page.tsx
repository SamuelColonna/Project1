export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex justify-center bg-black text-white py-3 px-4 rounded-full shadow-lg">
        <div className="mr-4">
          <a href="#" id="scroll-icon" className="block">
            <span>&#x25BC;</span>
          </a>
        </div>
        <ul className="flex items-center space-x-8">
          <li><a href="#how-it-works" className="hover:text-yellow-500">How it works</a></li>
          <li><a href="#benefits" className="hover:text-yellow-500">Benefits</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#pricing" className="hover:text-yellow-500">Pricing</a></li>
          <li><a href="#faqs" className="hover:text-yellow-500">FAQs</a></li>
          <li><a href="#login" className="hover:text-yellow-500">Login</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="how-it-works" className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold">How it works</h2>
      </section>
      <section id="benefits" className="min-h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-4xl font-bold">Benefits</h2>
      </section>
      <section id="services" className="min-h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-4xl font-bold">Services</h2>
      </section>
      <section id="pricing" className="min-h-screen flex items-center justify-center bg-gray-400">
        <h2 className="text-4xl font-bold">Pricing</h2>
      </section>
      <section id="faqs" className="min-h-screen flex items-center justify-center bg-gray-500">
        <h2 className="text-4xl font-bold">FAQs</h2>
      </section>
      <section id="login" className="min-h-screen flex items-center justify-center bg-gray-600">
        <h2 className="text-4xl font-bold">Login</h2>
      </section>
    </div>
  );
}
