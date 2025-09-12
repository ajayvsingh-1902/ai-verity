import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search, MessageCircle, Book } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Veritas and how does it work?",
          answer: "Veritas is an AI-powered misinformation detection platform that analyzes text, audio, and video content to identify potential fake news and manipulated media. Our advanced machine learning models examine patterns, metadata, and cross-reference sources to provide accuracy scores and detailed analysis reports."
        },
        {
          question: "How accurate is the analysis?",
          answer: "Our platform maintains a 99.2% accuracy rate across all content types. However, accuracy can vary depending on the type and quality of content analyzed. We continuously improve our models using the latest AI research and real-world data to maintain industry-leading performance."
        },
        {
          question: "What file formats are supported?",
          answer: "Text: .txt, .doc, .docx, .pdf, and direct URL analysis. Audio: .mp3, .wav, .m4a, and streaming URLs. Video: .mp4, .mov, .avi, YouTube URLs, and other common video formats. We're constantly adding support for new formats based on user needs."
        },
        {
          question: "Is there a free tier available?",
          answer: "Yes! We offer a free tier that includes 10 analyses per month across all content types. This is perfect for individual users, students, or those wanting to try our platform. Premium plans offer unlimited analyses, faster processing, and advanced features."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "How long does analysis take?",
          answer: "Most analyses complete within 2-5 seconds. Complex video content may take up to 30 seconds. Processing time depends on file size, content complexity, and current server load. Premium users get priority processing for faster results."
        },
        {
          question: "Is my data secure and private?",
          answer: "Absolutely. We use end-to-end encryption, secure cloud storage, and delete uploaded content immediately after analysis. We never store your files or share data with third parties. All analysis happens in isolated, secure environments."
        },
        {
          question: "Can I integrate Veritas with my application?",
          answer: "Yes! We offer a comprehensive REST API for developers and organizations. Our API supports all analysis features with detailed documentation, SDKs for popular languages, and dedicated support for enterprise integrations."
        },
        {
          question: "What makes your AI detection different?",
          answer: "Our models are trained on diverse, global datasets and use ensemble learning combining multiple AI approaches. We analyze not just content but also metadata, source patterns, and contextual information for more comprehensive detection than single-model solutions."
        }
      ]
    },
    {
      category: "Billing & Subscriptions",
      questions: [
        {
          question: "How does billing work?",
          answer: "We offer monthly and annual subscription plans. Premium features are billed automatically through secure payment processors. You can upgrade, downgrade, or cancel at any time. Annual plans include a 20% discount."
        },
        {
          question: "Can I get a refund?",
          answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact support for a full refund. Refunds are processed within 5-7 business days."
        },
        {
          question: "Do you offer enterprise pricing?",
          answer: "Yes! Enterprise plans include volume discounts, dedicated support, custom integrations, and SLA guarantees. Contact our sales team for custom pricing based on your organization's needs and usage requirements."
        }
      ]
    },
    {
      category: "Support & Troubleshooting",
      questions: [
        {
          question: "My analysis failed. What should I do?",
          answer: "First, check that your file format is supported and under the size limit (100MB for premium, 25MB for free users). If issues persist, try again in a few minutes or contact support with details about the file type and error message."
        },
        {
          question: "How can I improve analysis accuracy?",
          answer: "Use high-quality source material when possible. For audio/video, ensure clear audio and good resolution. Provide context when available. Multiple analyses of related content can also help establish patterns and improve confidence scores."
        },
        {
          question: "Can I export my analysis history?",
          answer: "Yes! Premium users can export their complete analysis history in JSON or CSV format. This includes all results, confidence scores, timestamps, and analysis details. The export feature is available in your dashboard."
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Start Free Analysis",
      description: "Try our platform with no signup required",
      link: "/dashboard",
      icon: <Search className="h-5 w-5" />
    },
    {
      title: "Contact Support",
      description: "Get help from our expert team",
      link: "/contact",
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      title: "Documentation",
      description: "Detailed guides and API docs",
      link: "/about",
      icon: <Book className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Veritas. Can't find what you're looking for? 
              Contact our support team for personalized help.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    {link.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{link.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={link.link}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem 
                        key={questionIndex} 
                        value={`${categoryIndex}-${questionIndex}`}
                      >
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help. Get in touch and we'll respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild className="bg-gradient-primary border-0">
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:support@veritas.ai">Email Us Directly</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;