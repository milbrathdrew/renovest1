import { differenceInDays } from 'date-fns';

export function calculateProjectStatus(completionDate: Date): 'on-target' | 'at-risk' | 'behind' {
  const now = new Date();
  const daysToCompletion = differenceInDays(completionDate, now);
  
  if (daysToCompletion > 14) return 'on-target';
  if (daysToCompletion > 7) return 'at-risk';
  return 'behind';
}

export const mockProjects = [
  {
    id: '1',
    name: 'Mixed-Use Development',
    address: '321 Mixed Use Blvd, City, State',
    propertyType: 'mixed-use' as const,
    startDate: new Date('2024-05-31'),
    completionDate: new Date('2024-11-30'),
    assignedCompany: 'ABC Construction',
    budget: 2500000,
    priorityLevel: 'high' as const,
    description: 'Mixed-use development with retail and residential units'
  },
  {
    id: '2',
    name: 'Commercial Office Remodel',
    address: '456 Business Ave, City, State',
    propertyType: 'commercial' as const,
    startDate: new Date('2024-04-14'),
    completionDate: new Date('2024-08-14'),
    assignedCompany: 'XYZ Contractors',
    budget: 1500000,
    priorityLevel: 'medium' as const,
    description: 'Complete office building renovation'
  }
]; 