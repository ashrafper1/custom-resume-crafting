
import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertCircle } from 'lucide-react';

interface ATSScoreProps {
  jobDescription: string;
  resumeText: string;
}

interface KeywordMatch {
  keyword: string;
  found: boolean;
}

// Mock function to calculate ATS score based on keyword matching
const calculateATSScore = (jobDescription: string, resumeText: string): {
  score: number;
  keywordMatches: KeywordMatch[];
  feedback: string[];
} => {
  // This is a simplified mock implementation
  // In a real app, this would use more sophisticated analysis
  
  // Extract keywords from job description (simplified version)
  const jobWords = jobDescription.toLowerCase().split(/\W+/).filter(word => 
    word.length > 3 && !['and', 'the', 'for', 'with'].includes(word)
  );
  
  // Get unique keywords
  const uniqueKeywords = [...new Set(jobWords)].slice(0, 10);
  
  // Check if keywords are in resume
  const keywordMatches = uniqueKeywords.map(keyword => ({
    keyword,
    found: resumeText.toLowerCase().includes(keyword)
  }));
  
  // Calculate match rate
  const matchCount = keywordMatches.filter(match => match.found).length;
  const score = Math.round((matchCount / uniqueKeywords.length) * 100);
  
  // Generate feedback
  let feedback = [];
  
  if (score < 40) {
    feedback.push("Your resume needs significant improvements to pass ATS screening.");
    feedback.push("Critical keywords are missing from your resume.");
  } else if (score < 70) {
    feedback.push("Your resume may pass some ATS screenings but could be improved.");
    feedback.push("Consider adding more relevant keywords from the job description.");
  } else {
    feedback.push("Your resume is well-optimized for ATS screening.");
    feedback.push("Most important keywords are present in your resume.");
  }
  
  return { score, keywordMatches, feedback };
};

const ATSScore = ({ jobDescription, resumeText }: ATSScoreProps) => {
  const [atsResult, setAtsResult] = useState<{
    score: number;
    keywordMatches: KeywordMatch[];
    feedback: string[];
  } | null>(null);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with delay
    const timer = setTimeout(() => {
      const result = calculateATSScore(jobDescription, resumeText);
      setAtsResult(result);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [jobDescription, resumeText]);

  if (loading) {
    return (
      <div className="border rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">ATS Compatibility</h3>
          <Badge variant="outline" className="bg-secondary text-muted-foreground">
            Analyzing
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!atsResult) return null;

  const { score, keywordMatches, feedback } = atsResult;

  const getScoreColor = () => {
    if (score >= 70) return "bg-green-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getScoreBadge = () => {
    if (score >= 70) return (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        Excellent
      </Badge>
    );
    if (score >= 40) return (
      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
        Average
      </Badge>
    );
    return (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
        Needs Improvement
      </Badge>
    );
  };

  return (
    <div className="border rounded-xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">ATS Compatibility Score</h3>
        {getScoreBadge()}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Resume Score</span>
          <span className="text-sm font-bold">{score}%</span>
        </div>
        <Progress value={score} className={getScoreColor()} />
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Feedback</h4>
        <ul className="space-y-1.5">
          {feedback.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-sm font-semibold">Key Terms in Job Description</h4>
        <div className="grid grid-cols-2 gap-2">
          {keywordMatches.map((match, index) => (
            <div key={index} className="flex items-center gap-2 bg-secondary rounded px-3 py-1.5">
              {match.found ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <X className="h-4 w-4 text-red-500" />
              )}
              <span className="text-sm truncate">{match.keyword}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-2 border-t">
        <p className="text-xs text-muted-foreground">
          Upgrade to optimize your resume with our AI tools and improve your score.
        </p>
      </div>
    </div>
  );
};

export default ATSScore;
