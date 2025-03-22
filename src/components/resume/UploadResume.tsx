
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Upload, File, X, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface UploadResumeProps {
  onResumeUploaded: (file: File) => void;
}

const UploadResume = ({ onResumeUploaded }: UploadResumeProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    // Check file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload a PDF or Word document.');
      return;
    }
    
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File too large. Maximum size is 5MB.');
      return;
    }
    
    setSelectedFile(file);
    onResumeUploaded(file);
    toast.success('Resume uploaded successfully!');
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type === 'application/pdf') {
      return <FileText className="h-5 w-5 text-red-500" />;
    } else {
      return <FileText className="h-5 w-5 text-blue-500" />;
    }
  };

  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-lg font-semibold">Upload Your Resume</h3>
        <p className="text-sm text-muted-foreground">
          Upload your existing resume for AI optimization or create a new one from scratch.
        </p>
      </div>

      {!selectedFile ? (
        <div 
          className={`border-2 border-dashed rounded-xl p-8 text-center ${
            dragActive ? 'border-primary bg-primary/5' : 'border-gray-200'
          } transition-colors duration-200 ease-in-out`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-medium">Drag and drop your resume here</p>
              <p className="text-sm text-muted-foreground mt-1">
                Supports PDF, DOC, and DOCX (max 5MB)
              </p>
            </div>
            <div className="mt-2">
              <Button 
                onClick={onButtonClick} 
                variant="outline" 
                className="rounded-full"
              >
                Browse files
              </Button>
              <input
                ref={inputRef}
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="border rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getFileIcon(selectedFile)}
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={removeFile}
              className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <Separator className="my-6" />

      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-lg font-semibold">Or Create a New Resume</h3>
        <p className="text-sm text-muted-foreground">
          Don't have a resume yet? Start from scratch with our guided builder.
        </p>
      </div>

      <Button variant="outline" className="w-full rounded-xl h-12">
        <File className="mr-2 h-4 w-4" />
        Start New Resume
      </Button>
    </div>
  );
};

export default UploadResume;
