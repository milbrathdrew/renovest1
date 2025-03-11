'use client';

import { useState } from 'react';
import { ProjectFilters } from './ProjectFilters';
import { ProjectCard } from './ProjectCard'; 
import { mockProjects, calculateProjectStatus } from '@/lib/utils';

export function ProjectList() {
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  const handleSearch = (term: string) => {
    const filtered = mockProjects.filter(project => 
      project.name.toLowerCase().includes(term.toLowerCase()) ||
      project.address.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const handlePropertyTypeChange = (type: string) => {
    if (!type) {
      setFilteredProjects(mockProjects);
      return;
    }
    const filtered = mockProjects.filter(project => 
      project.propertyType === type
    );
    setFilteredProjects(filtered);
  };

  const handleDateRangeChange = (start: Date | null, end: Date | null) => {
    let filtered = [...mockProjects];
    if (start) {
      filtered = filtered.filter(project => project.startDate >= start);
    }
    if (end) {
      filtered = filtered.filter(project => project.completionDate <= end);
    }
    setFilteredProjects(filtered);
  };

  const handleStatusChange = (statuses: string[]) => {
    if (statuses.length === 0) {
      setFilteredProjects(mockProjects);
      return;
    }
    const filtered = mockProjects.filter(project => 
      statuses.includes(calculateProjectStatus(project.completionDate))
    );
    setFilteredProjects(filtered);
  };

  return (
    <div className="space-y-6">
      <ProjectFilters
        onSearch={handleSearch}
        onPropertyTypeChange={handlePropertyTypeChange}
        onDateRangeChange={handleDateRangeChange}
        onStatusChange={handleStatusChange}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
