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
      {/* Add more filters as needed */}
    </div>
  );
} 