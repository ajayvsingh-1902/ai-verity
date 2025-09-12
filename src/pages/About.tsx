import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, Users, Brain, Lock, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Advanced AI Technology",
      description: "State-of-the-art machine learning models trained on millions of data points for accurate detection.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Multi-Modal Analysis",
      description: "Comprehensive detection across text, audio, and video content with unified reporting.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-Time Processing",
      description: "Lightning-fast analysis with results delivered in seconds, not minutes.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Privacy & Security",
      description: "Enterprise-grade security with end-to-end encryption and data protection.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Coverage",
      description: "Multi-language support with region-specific misinformation pattern recognition.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Leading",
      description: "99.2% accuracy rate trusted by researchers, journalists, and organizations worldwide.",
    },
  ];

  const stats = [
    { value: "99.2%", label: "Accuracy Rate" },
    { value: "1M+", label: "Content Analyzed" },
    { value: "2.3s", label: "Average Processing Time" },
    { value: "50+", label: "Languages Supported" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-primary font-orbitron">VERITAS</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to combat misinformation with cutting-edge AI technology. 
              Veritas empowers individuals and organizations to verify content authenticity 
              across multiple media formats with unprecedented accuracy.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  In an era where misinformation spreads faster than ever, we believe in the power 
                  of truth. Veritas combines advanced artificial intelligence with intuitive design 
                  to create the most comprehensive misinformation detection platform available.
                </p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Our platform serves journalists verifying sources, researchers studying information 
                  patterns, educators teaching digital literacy, and organizations protecting their 
                  reputation from false content.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button asChild className="bg-gradient-primary border-0">
                    <Link to="/dashboard">Try Our Platform</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
              <div className="glass rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive tools designed for accuracy, speed, and ease of use in combating misinformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glass hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="glass rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Deep Learning Models</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our neural networks are trained on diverse datasets including text patterns, 
                    audio frequencies, and video metadata to detect manipulation across all media types.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Content Ingestion</h4>
                      <p className="text-muted-foreground">
                        Upload or link to text, audio, or video content through our secure platform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">AI Analysis</h4>
                      <p className="text-muted-foreground">
                        Multiple AI models analyze patterns, metadata, and cross-reference with known sources.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results & Insights</h4>
                      <p className="text-muted-foreground">
                        Receive detailed reports with confidence scores, risk factors, and source verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Combat Misinformation?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of professionals using Veritas to maintain information integrity and build trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" asChild className="bg-gradient-primary border-0">
                <Link to="/dashboard">Start Free Analysis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;