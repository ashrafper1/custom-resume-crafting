
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Eye, Printer, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface ResumePreviewProps {
  resumeData: any;
  templateId: string;
}

const ResumePreview = ({ resumeData, templateId }: ResumePreviewProps) => {
  const [downloadFormat, setDownloadFormat] = useState<'pdf' | 'docx'>('pdf');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsDownloading(false);
    toast.success(`Resume downloaded as ${downloadFormat.toUpperCase()}`);
  };

  // Get template display name
  const getTemplateName = () => {
    switch (templateId) {
      case 'professional': return 'Professional';
      case 'modern': return 'Modern';
      case 'minimal': return 'Minimal';
      case 'creative': return 'Creative';
      default: return 'Professional';
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Resume Preview</h3>
          <p className="text-sm text-muted-foreground">
            {getTemplateName()} template • Optimized for ATS
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 flex justify-center mb-6">
        <div className="bg-white shadow-card w-full max-w-[612px] aspect-[8.5/11] rounded-md overflow-hidden">
          <img 
            src={`https://placehold.co/720x930/ffffff/333333?text=${getTemplateName()}+Template`} 
            alt="Resume Preview" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <h4 className="font-medium text-center mb-2">Download Your Resume</h4>
          <Tabs 
            defaultValue="pdf" 
            className="w-full"
            onValueChange={(value) => setDownloadFormat(value as 'pdf' | 'docx')}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pdf" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                PDF Format
              </TabsTrigger>
              <TabsTrigger value="docx" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Word Format
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pdf" className="pt-4">
              <p className="text-sm text-muted-foreground text-center mb-4">
                PDF format is perfect for online applications and ensures your resume looks exactly the same on all devices.
              </p>
            </TabsContent>
            <TabsContent value="docx" className="pt-4">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Word format allows you to make additional edits to your resume after downloading.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <Button 
          className="w-full rounded-full h-12"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Preparing Download...
            </span>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download {downloadFormat === 'pdf' ? 'PDF' : 'Word Document'}
            </>
          )}
        </Button>

        <div className="mt-4 text-center">
          <Button variant="link" size="sm" className="text-muted-foreground">
            <Eye className="mr-1 h-4 w-4" />
            Preview in Full Screen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
