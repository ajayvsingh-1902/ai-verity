import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { FileText, Headphones, Video, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import veritasLogo from "@/assets/veritas-shield-logo.png";

const Index = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="float">
            <div className="mb-6 flex items-center justify-center flex-col">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <img 
                  src={veritasLogo} 
                  alt="Veritas Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 animate-pulse"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-medium text-muted-foreground mb-2 slide-in-left">
                    Latin by Truth
                  </h2>
                  <h1 className="text-4xl sm:text-6xl lg:text-8xl font-orbitron font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse hero-glow slide-in-right">
                    VERITAS
                  </h1>
                </div>
              </div>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Powered by AI • Advanced Misinformation Detection Platform
              </p>
            </div>

            <div className="mt-12 space-y-6 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:space-x-8">
              <Link to="/dashboard?type=text">
                <Button size="lg" className="group bg-gradient-primary border-0 hover:scale-105 transition-all duration-300 pulse-glow animate-pulse shadow-lg shadow-cyan-500/25">
                  <FileText className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Analyze Text
                </Button>
              </Link>
              
              <Link to="/dashboard?type=audio">
                <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  <Headphones className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Analyze Audio
                </Button>
              </Link>
              
              <Link to="/dashboard?type=video">
                <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  <Video className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Analyze Video
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/50 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-bounce" />
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Veritas?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets intuitive design to deliver the most comprehensive misinformation detection platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multi-Modal Detection</h3>
              <p className="text-muted-foreground">
                Analyze text, audio, and video content with our advanced AI models trained on millions of data points.
              </p>
            </div>

            <div className="glass rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Get results in seconds, not minutes. Our optimized AI pipeline ensures rapid analysis without compromising accuracy.
              </p>
            </div>

            <div className="glass rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
              <p className="text-muted-foreground">
                Simple dashboard interface with comprehensive reporting. Perfect for researchers, journalists, and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Fight Misinformation?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of professionals using Veritas to combat fake news and maintain information integrity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-gradient-primary border-0 hover:scale-105 transition-all duration-300">
                Start Free Analysis
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
