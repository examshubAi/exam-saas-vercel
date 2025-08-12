import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import TrendingPapers from '../components/TrendingPapers';
import Pricing from '../components/Pricing';
import AuthModal from '../components/AuthModal';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>EXAMHUB.AI - India's #1 AI Exam Paper Search Tool</title>
        <meta name="description" content="AI-powered exam paper search and download platform" />
      </Head>
      
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrendingPapers />
      <Pricing />
      <AuthModal />
      
      {/* Support Chat */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110">
          💬
        </button>
      </div>
    </div>
  );
}
