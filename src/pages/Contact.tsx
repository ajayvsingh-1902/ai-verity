import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      content: "support@veritas.ai",
      description: "For general inquiries and support"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Monday to Friday, 9AM - 6PM EST"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Tech Street, Suite 456"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Response Time",
      content: "< 24 hours",
      description: "Average response time for inquiries"
    }
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "General Support",
      description: "Questions about features, pricing, or getting started",
      contact: "support@veritas.ai"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enterprise Sales",
      description: "Custom solutions for organizations and large teams",
      contact: "sales@veritas.ai"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Technical Support",
      description: "API integration, troubleshooting, and technical guidance",
      contact: "tech@veritas.ai"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have questions about Veritas? We're here to help. Reach out to our team 
              and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary border-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium">{info.content}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Support Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Support Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {supportOptions.map((option, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{option.title}</h4>
                          <p className="text-muted-foreground text-sm mb-2">{option.description}</p>
                          <a 
                            href={`mailto:${option.contact}`}
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            {option.contact}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-3">
                    <p className="text-muted-foreground text-sm mb-3">
                      Stay updated with the latest in AI misinformation detection
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://twitter.com/veritas" target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://linkedin.com/company/veritas" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://github.com/veritas" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://medium.com/@veritas" target="_blank" rel="noopener noreferrer">
                          Blog
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;