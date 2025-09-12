import { useState, useEffect } from "react";

interface Stats {
  accuracy: number;
  contentAnalyzed: number;
}

// Mock data store - in a real app, this would be connected to a backend
const mockStats = {
  accuracy: 99.2,
  contentAnalyzed: 1000000,
};

export const useStats = () => {
  const [stats, setStats] = useState<Stats>(mockStats);

  // Simulate real-time updates
  useEffect(() => {
    const updateStats = () => {
      // Get uploaded count from localStorage or use default
      const uploadedCount = localStorage.getItem('uploadedCount') || '5';
      const count = parseInt(uploadedCount);
      
      // Simulate accuracy calculation based on uploads
      const baseAccuracy = 99.2;
      const accuracyVariation = (Math.random() - 0.5) * 0.2; // Small variation
      const newAccuracy = Math.max(98.5, Math.min(99.9, baseAccuracy + accuracyVariation));
      
      // Update content analyzed count
      const newContentAnalyzed = mockStats.contentAnalyzed + count;

      setStats({
        accuracy: parseFloat(newAccuracy.toFixed(1)),
        contentAnalyzed: newContentAnalyzed,
      });
    };

    updateStats();
    
    // Update stats every 30 seconds
    const interval = setInterval(updateStats, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const incrementStats = () => {
    // Increment uploaded count
    const currentCount = localStorage.getItem('uploadedCount') || '5';
    const newCount = parseInt(currentCount) + 1;
    localStorage.setItem('uploadedCount', newCount.toString());
    
    // Update stats
    setStats(prev => ({
      accuracy: Math.max(98.5, Math.min(99.9, prev.accuracy + (Math.random() - 0.5) * 0.1)),
      contentAnalyzed: prev.contentAnalyzed + 1,
    }));
  };

  return { stats, incrementStats };
};