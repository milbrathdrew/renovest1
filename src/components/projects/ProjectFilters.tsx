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
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <input
        type="text"
        placeholder="Search by name or address..."
        className="w-full px-4 py-2 border rounded-lg"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="w-full px-4 py-2 border rounded-lg"
        onChange={(e) => onPropertyTypeChange(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="residential">Residential</option>
        <option value="mixed-use">Mixed Use</option>
        <option value="commercial">Commercial</option>
      </select>
      <div className="flex space-x-4">
        <input
          type="date"
          className="w-full px-4 py-2 border rounded-lg"
          onChange={(e) => onDateRangeChange(new Date(e.target.value), null)}
        />
        <input
          type="date"
          className="w-full px-4 py-2 border rounded-lg"
          onChange={(e) => onDateRangeChange(null, new Date(e.target.value))}
        />
      </div>
      <div className="flex space-x-4">
        <label>
          <input
            type="checkbox"
            onChange={(e) => onStatusChange(['on-target'])}
          />
          On Target
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => onStatusChange(['at-risk'])}
          />
          At Risk
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => onStatusChange(['behind'])}
          />
          Behind
        </label>
      </div>
    </div>
  );
} 