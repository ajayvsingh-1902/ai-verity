import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

const Privacy = () => {
  const lastUpdated = "December 9, 2024";

  const sections = [
    {
      icon: <Database className="h-5 w-5" />,
      title: "Information We Collect",
      content: [
        "Account information (name, email, password)",
        "Uploaded content for analysis (text, audio, video files)",
        "Usage data and analytics",
        "Device and browser information",
        "IP addresses and location data"
      ]
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "How We Use Your Information",
      content: [
        "Provide misinformation detection services",
        "Improve our AI models and algorithms",
        "Send service updates and notifications",
        "Provide customer support",
        "Ensure platform security and prevent fraud"
      ]
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Data Protection",
      content: [
        "End-to-end encryption for all data transmission",
        "Secure cloud storage with enterprise-grade security",
        "Regular security audits and penetration testing",
        "Access controls and authentication systems",
        "Data anonymization for AI training"
      ]
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Correct inaccurate information",
        "Delete your account and data",
        "Export your data",
        "Opt-out of marketing communications"
      ]
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Data Retention",
      content: [
        "Account data: Retained while account is active",
        "Analysis history: 90 days by default (configurable)",
        "Uploaded content: Deleted after analysis completion",
        "Usage analytics: Anonymized and retained for service improvement",
        "Support communications: 2 years"
      ]
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Third-Party Services",
      content: [
        "Cloud hosting providers (AWS, Google Cloud)",
        "Authentication services",
        "Analytics platforms (anonymized data only)",
        "Payment processors (for premium features)",
        "Customer support platforms"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground mb-4">
                At Veritas, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, protect, and share your information when you use our AI-powered misinformation 
                detection platform.
              </p>
              <p className="text-muted-foreground">
                We are committed to transparency and giving you control over your data. If you have 
                any questions about this policy, please contact us at privacy@veritas.ai.
              </p>
            </CardContent>
          </Card>

          {/* Policy Sections */}
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

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-muted/20 rounded-lg p-4 space-y-2">
                  <p><strong>Email:</strong> privacy@veritas.ai</p>
                  <p><strong>Address:</strong> 123 Tech Street, Suite 456, San Francisco, CA 94105</p>
                  <p><strong>Data Protection Officer:</strong> dpo@veritas.ai</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  We will respond to your inquiry within 30 days. For urgent privacy matters, 
                  please mark your email as "URGENT - Privacy Request".
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates Notice */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Policy Updates</h3>
              <p className="text-muted-foreground text-sm">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;