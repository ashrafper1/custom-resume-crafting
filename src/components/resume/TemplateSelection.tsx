
import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface TemplateSelectionProps {
  onTemplateSelected: (templateId: string) => void;
}

const templates: Template[] = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean and structured layout, perfect for corporate roles',
    image: 'https://placehold.co/300x400/f5f5f5/a3a3a3?text=Professional'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with a creative touch',
    image: 'https://placehold.co/300x400/f5f5f5/a3a3a3?text=Modern'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant, focuses on content',
    image: 'https://placehold.co/300x400/f5f5f5/a3a3a3?text=Minimal'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold design for creative industries',
    image: 'https://placehold.co/300x400/f5f5f5/a3a3a3?text=Creative'
  }
];

const TemplateSelection = ({ onTemplateSelected }: TemplateSelectionProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
    onTemplateSelected(templateId);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-lg font-semibold">Choose a Template</h3>
        <p className="text-sm text-muted-foreground">
          Select a professional template for your resume. All templates are ATS-friendly.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`relative cursor-pointer group rounded-lg overflow-hidden transition-all duration-200 border-2 ${
              selectedTemplate === template.id 
                ? 'border-primary shadow-elegant' 
                : 'border-transparent hover:border-gray-200'
            }`}
            onClick={() => handleSelectTemplate(template.id)}
          >
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2 z-10 bg-primary text-white rounded-full p-1">
                <Check className="h-4 w-4" />
              </div>
            )}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className={`p-3 text-center ${selectedTemplate === template.id ? 'bg-primary/5' : 'bg-white'}`}>
              <h4 className="font-medium text-sm">{template.name}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
