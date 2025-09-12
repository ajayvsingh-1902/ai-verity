import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Headphones, 
  Video,
  Search,
  Filter,
  Download,
  Calendar
} from "lucide-react";
import { format } from "date-fns";

interface AnalysisResult {
  id: string;
  type: "text" | "audio" | "video";
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

const History = () => {
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [filteredHistory, setFilteredHistory] = useState<AnalysisResult[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "text" | "audio" | "video">("all");
  const [filterResult, setFilterResult] = useState<"all" | "authentic" | "fake">("all");

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('analysisHistory');
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory).map((item: any) => ({
        ...item,
        timestamp: new Date(item.timestamp)
      }));
      setHistory(parsedHistory);
      setFilteredHistory(parsedHistory);
    }
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = history;

    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.filename.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== "all") {
      filtered = filtered.filter(item => item.type === filterType);
    }

    if (filterResult !== "all") {
      filtered = filtered.filter(item => item.result === filterResult);
    }

    setFilteredHistory(filtered);
  }, [history, searchTerm, filterType, filterResult]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text":
        return <FileText className="h-4 w-4" />;
      case "audio":
        return <Headphones className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const exportHistory = () => {
    const dataStr = JSON.stringify(history, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `veritas-history-${format(new Date(), 'yyyy-MM-dd')}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Analysis History</h1>
                <p className="text-muted-foreground">
                  View and manage your past content analyses
                </p>
              </div>
              <Button 
                onClick={exportHistory}
                variant="outline" 
                className="mt-4 sm:mt-0"
                disabled={history.length === 0}
              >
                <Download className="mr-2 h-4 w-4" />
                Export History
              </Button>
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by filename..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Type filter */}
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="px-3 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="text">Text</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                </select>

                {/* Result filter */}
                <select
                  value={filterResult}
                  onChange={(e) => setFilterResult(e.target.value as any)}
                  className="px-3 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Results</option>
                  <option value="authentic">Authentic</option>
                  <option value="fake">Suspicious</option>
                </select>

                {/* Clear filters */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterType("all");
                    setFilterResult("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Analyses</p>
                    <p className="text-2xl font-bold">{history.length}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Authentic</p>
                    <p className="text-2xl font-bold text-success">
                      {history.filter(item => item.result === "authentic").length}
                    </p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Suspicious</p>
                    <p className="text-2xl font-bold text-destructive">
                      {history.filter(item => item.result === "fake").length}
                    </p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Confidence</p>
                    <p className="text-2xl font-bold">
                      {history.length > 0 
                        ? Math.round(history.reduce((acc, item) => acc + item.confidence, 0) / history.length)
                        : 0}%
                    </p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* History List */}
          <Card>
            <CardHeader>
              <CardTitle>
                Analysis Results ({filteredHistory.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredHistory.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {history.length === 0 
                      ? "No analyses found. Start by uploading content for analysis."
                      : "No results match your current filters."
                    }
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredHistory.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getTypeIcon(item.type)}
                            <span className="font-medium">{item.filename}</span>
                            <Badge variant="outline" className="capitalize">
                              {item.type}
                            </Badge>
                            <Badge 
                              variant={item.result === "authentic" ? "default" : "destructive"}
                              className="flex items-center space-x-1"
                            >
                              {item.result === "authentic" ? (
                                <CheckCircle className="h-3 w-3" />
                              ) : (
                                <AlertCircle className="h-3 w-3" />
                              )}
                              <span>{item.result === "authentic" ? "Authentic" : "Suspicious"}</span>
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                            <div>
                              <span className="font-medium">Confidence:</span> {item.confidence}%
                            </div>
                            <div>
                              <span className="font-medium">Sources:</span> {item.analysis.sources}
                            </div>
                            <div>
                              <span className="font-medium">Date:</span> {format(item.timestamp, 'MMM d, yyyy HH:mm')}
                            </div>
                          </div>
                          
                          <div className="mt-2">
                            <p className="text-sm">
                              <span className="font-medium">Risk Factors:</span>{" "}
                              {item.analysis.riskFactors.join(", ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default History;