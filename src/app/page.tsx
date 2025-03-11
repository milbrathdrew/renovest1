import { ProjectList } from '@/components/projects/ProjectList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-gray-600">
              A list of all projects including their status, location, and progress.
            </p>
          </div>
          <a
            href="/projects/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Project
          </a>
        </div>
        <ProjectList />
      </div>
    </main>
  );
}
