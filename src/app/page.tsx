import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">DPO Agent</h1>
          <p className="text-xl text-gray-600">
            Runtime API & LLM Engine for GDPR Compliance
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link href="/agent" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Agent Shell</h2>
            <p className="text-gray-600">Monitor LLM pipeline status and API endpoints</p>
          </Link>

          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">API Endpoints</h2>
            <div className="space-y-1 text-sm font-mono text-gray-600">
              <div>POST /api/v1/engine/score</div>
              <div>POST /api/v1/engine/suggest-controls</div>
              <div>POST /api/v1/report/render</div>
              <div>POST /api/provision</div>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-500">
          <p>DPO Agent • Powered by Avantle.ai</p>
        </footer>
      </div>
    </div>
  );
}
