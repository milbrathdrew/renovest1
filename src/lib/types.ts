export interface Project {
  id: string;
  name: string;
  address: string;
  propertyType: 'residential' | 'mixed-use' | 'commercial';
  startDate: Date;
  completionDate: Date;
  assignedCompany: string;
  budget: number;
  priorityLevel: 'low' | 'medium' | 'high';
  description?: string;
}

export interface Comment {
  id: string;
  projectId: string;
  parentId?: string;
  content: string;
  attachments: Attachment[];
  createdAt: Date;
  author: string;
}

export interface Attachment {
  id: string;
  url: string;
  type: 'image' | 'file';
  name: string;
} 