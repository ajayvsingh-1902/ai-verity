import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertTriangle, Users, CreditCard, Gavel } from "lucide-react";

const Terms = () => {
  const lastUpdated = "December 9, 2024";

  const sections = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing Veritas, you agree to these Terms of Service",
        "You must be 18 years or older to use our services",
        "You represent that you have authority to bind your organization",
        "Continued use constitutes acceptance of any updates to these terms"
      ]
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Service Description",
      content: [
        "Veritas provides AI-powered misinformation detection services",
        "Analysis results are provided for informational purposes",
        "We do not guarantee 100% accuracy in all cases",
        "Services may be updated or modified at our discretion",
        "We reserve the right to limit usage for fair use"
      ]
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "User Responsibilities",
      content: [
        "Provide accurate information when creating your account",
        "Use the service only for lawful purposes",
        "Do not upload copyrighted content without permission",
        "Respect intellectual property rights of others",
        "Report any security vulnerabilities to our team"
      ]
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Prohibited Uses",
      content: [
        "Illegal activities or violation of laws",
        "Harassment, abuse, or harmful content",
        "Attempting to reverse engineer our AI models",
        "Excessive usage that impacts service availability",
        "Reselling or redistributing our services without permission"
      ]
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Payment and Refunds",
      content: [
        "Premium features require paid subscription",
        "Payments are processed securely through third-party providers",
        "Subscriptions auto-renew unless cancelled",
        "Refunds available within 30 days of payment",
        "Unused credits do not roll over between billing periods"
      ]
    },
    {
      icon: <Gavel className="h-5 w-5" />,
      title: "Limitation of Liability",
      content: [
        "Service provided 'as is' without warranties",
        "We are not liable for decisions based on analysis results",
        "Total liability limited to amount paid for services",
        "No liability for indirect or consequential damages",
        "Force majeure events excuse performance delays"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Welcome to Veritas</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Service ("Terms") govern your use of the Veritas platform and services 
                provided by Veritas Inc. ("we", "us", "our"). By using our service, you agree to 
                these terms in full.
              </p>
              <p className="text-muted-foreground">
                Please read these terms carefully before using our platform. If you do not agree 
                with any part of these terms, you should not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {section.icon}
                    </div>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  All content, features, and functionality of Veritas are owned by us and 
                  protected by intellectual property laws. Users retain rights to their 
                  uploaded content but grant us license to process it for analysis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Privacy & Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Your privacy is important to us. Our data practices are governed by our 
                  Privacy Policy. We use uploaded content solely for providing analysis 
                  services and improving our AI models.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We strive for 99.9% uptime but cannot guarantee uninterrupted service. 
                  Maintenance windows will be announced in advance when possible. We are 
                  not liable for temporary service interruptions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We may suspend or terminate accounts for violation of these terms. Users 
                  can delete their accounts at any time. Upon termination, access to services 
                  ceases and data may be deleted per our retention policy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Governing Law */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Governing Law & Disputes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  These Terms are governed by the laws of California, United States. Any disputes 
                  will be resolved through binding arbitration in San Francisco, CA.
                </p>
                <div className="bg-muted/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Contact for Legal Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> legal@veritas.ai<br />
                    <strong>Address:</strong> 123 Tech Street, Suite 456, San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Severability</h3>
              <p className="text-muted-foreground text-sm">
                If any provision of these Terms is found to be unenforceable, the remaining 
                provisions will remain in full force and effect. These Terms constitute the 
                entire agreement between you and Veritas regarding the use of our services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;