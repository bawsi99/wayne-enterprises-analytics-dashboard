import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <Header />
      <main className="w-full">
        <Hero />
        
        {/* Dashboard CTA Section */}
        <section className="w-full py-20 px-6">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Wayne Enterprises Analytics Dashboard
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore comprehensive data analytics covering financial performance, security operations, 
              R&D portfolio, supply chain metrics, and HR analytics for Wayne Enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <BarChart3 className="mr-2 w-5 h-5" />
                  View Analytics Dashboard
                </Button>
              </Link>
              <div className="flex items-center text-gray-400">
                <TrendingUp className="mr-2 w-5 h-5" />
                <span>Real-time data insights</span>
              </div>
            </div>
          </div>
        </section>

        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
