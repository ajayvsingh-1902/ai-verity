import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useStats } from "@/hooks/useStats";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Headphones,
  Video,
  Upload,
  Link as LinkIcon,
  CheckCircle,
  AlertCircle,
  Loader2,
  BarChart3,
} from "lucide-react";

type AnalysisType = "text" | "audio" | "video";

interface AnalysisResult {
  id: string;
  type: AnalysisType;
  filename: string;
  result: "authentic" | "fake";
  confidence: number;
  timestamp: Date;
  analysis: {
    credibilityScore: number;
    riskFactors: string[];
    sources: number;
  };
}

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState<AnalysisType>(
    (searchParams.get("type") as AnalysisType) || "text"
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [url, setUrl] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  const { incrementStats } = useStats();
  const { toast } = useToast();

  useEffect(() => {
    const type = searchParams.get("type") as AnalysisType;
    if (type && ["text", "audio", "video"].includes(type)) {
      setSelectedType(type);
    }
  }, [searchParams]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const simulateAnalysis = async (): Promise<AnalysisResult> => {
    // Simulate AI analysis
    const confidence = Math.random() * 30 + 70; // 70-100%
    const isAuthentic = confidence > 85;
    
    return {
      id: Date.now().toString(),
      type: selectedType,
      filename: uploadedFile?.name || url || `${selectedType}-content`,
      result: isAuthentic ? "authentic" : "fake",
      confidence: Math.round(confidence),
      timestamp: new Date(),
      analysis: {
        credibilityScore: Math.round(confidence),
        riskFactors: isAuthentic 
          ? ["Verified sources", "Consistent metadata", "No manipulation detected"]
          : ["Suspicious patterns", "Inconsistent metadata", "Potential deepfake elements"],
        sources: Math.floor(Math.random() * 10) + 1,
      },
    };
  };

  const handleAnalyze = async () => {
    if (!uploadedFile && !url) {
      toast({
        title: "Error",
        description: "Please upload a file or enter a URL",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Simulate analysis time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const result = await simulateAnalysis();
      setResults(prev => [result, ...prev]);
      incrementStats();
      
      // Save to history
      const history = JSON.parse(localStorage.getItem('analysisHistory') || '[]');
      history.unshift(result);
      localStorage.setItem('analysisHistory', JSON.stringify(history.slice(0, 50))); // Keep last 50
      
      toast({
        title: "Analysis Complete",
        description: `Content analyzed with ${result.confidence}% confidence`,
        variant: result.result === "authentic" ? "default" : "destructive",
      });
      
      // Reset form
      setUploadedFile(null);
      setUrl("");
      
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getTypeIcon = (type: AnalysisType) => {
    switch (type) {
      case "text":
        return <FileText className="h-5 w-5" />;
      case "audio":
        return <Headphones className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
    }
  };

  const getUploadText = () => {
    switch (selectedType) {
      case "text":
        return "Drop text documents here or click to browse";
      case "audio":
        return "Drop audio files here or click to browse";
      case "video":
        return "Drop video files here or click to browse";
    }
  };

  const getUrlPlaceholder = () => {
    switch (selectedType) {
      case "text":
        return "https://example.com/article";
      case "audio":
        return "https://example.com/audio.mp3";
      case "video":
        return "https://youtube.com/watch?v=...";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Analysis Dashboard</h1>
            <p className="text-muted-foreground">
              Upload content for AI-powered misinformation detection
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Type Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Analysis Type</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {(["text", "audio", "video"] as AnalysisType[]).map((type) => (
                      <Button
                        key={type}
                        variant={selectedType === type ? "default" : "outline"}
                        onClick={() => setSelectedType(type)}
                        className={`flex items-center space-x-2 h-12 ${
                          selectedType === type ? "bg-gradient-primary border-0" : ""
                        }`}
                      >
                        {getTypeIcon(type)}
                        <span className="capitalize">{type}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* URL Input */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <LinkIcon className="h-5 w-5" />
                    <span>URL Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder={getUrlPlaceholder()}
                      className="flex-1 px-3 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Button 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || (!url && !uploadedFile)}
                      className="bg-gradient-primary border-0"
                    >
                      {isAnalyzing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        "Analyze URL"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* File Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="h-5 w-5" />
                    <span>File Upload</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept={
                        selectedType === "text"
                          ? ".txt,.doc,.docx,.pdf"
                          : selectedType === "audio"
                          ? ".mp3,.wav,.m4a"
                          : ".mp4,.mov,.avi"
                      }
                    />
                    <div className="space-y-4">
                      {getTypeIcon(selectedType)}
                      <div>
                        <p className="text-sm font-medium">{getUploadText()}</p>
                        {uploadedFile && (
                          <p className="text-xs text-primary mt-2">
                            Selected: {uploadedFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || (!url && !uploadedFile)}
                      size="lg"
                      className="bg-gradient-primary border-0"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Start Analysis
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.length === 0 ? (
                      <p className="text-muted-foreground text-sm text-center py-8">
                        No analyses yet. Upload content to get started.
                      </p>
                    ) : (
                      results.slice(0, 3).map((result) => (
                        <div
                          key={result.id}
                          className={`p-4 rounded-lg border ${
                            result.result === "authentic"
                              ? "border-success/20 bg-success/5"
                              : "border-destructive/20 bg-destructive/5"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {result.result === "authentic" ? (
                                <CheckCircle className="h-4 w-4 text-success" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-destructive" />
                              )}
                              <span className="text-sm font-medium">
                                {result.result === "authentic" ? "Authentic" : "Suspicious"}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {result.confidence}%
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">
                            {result.filename}
                          </p>
                          <Progress 
                            value={result.confidence} 
                            className="mt-2 h-2"
                          />
                        </div>
                      ))
                    )}
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

export default Dashboard;