import { useState } from 'react';

interface FilterProps {
  onSearch: (term: string) => void;
  onPropertyTypeChange: (type: string) => void;
  onDateRangeChange: (start: Date | null, end: Date | null) => void;
  onStatusChange: (statuses: string[]) => void;
}

export function ProjectFilters({
  onSearch,
  onPropertyTypeChange,
  onDateRangeChange,
  onStatusChange,
}: FilterProps) {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const handleStatusChange = (status: string) => {
    const newStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter(s => s !== status)
      : [...selectedStatuses, status];
    
    setSelectedStatuses(newStatuses);
    onStatusChange(newStatuses);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2">
          <input
            type="text"
            placeholder="Search by name or address..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div>
          <select 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onPropertyTypeChange(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="residential">Residential</option>
            <option value="mixed-use">Mixed Use</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onDateRangeChange(new Date(e.target.value), null)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onDateRangeChange(null, new Date(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <span className="text-sm font-medium text-gray-700">Status:</span>
        {['on-target', 'at-risk', 'behind'].map((status) => (
          <button
            key={status}
            onClick={() => handleStatusChange(status)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedStatuses.includes(status)
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}