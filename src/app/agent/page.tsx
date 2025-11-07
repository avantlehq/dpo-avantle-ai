export default function AgentShellPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">DPO Agent Shell</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">LLM Pipeline Status</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Engine Status:</span>
              <span className="text-green-600">✓ Active</span>
            </div>
            <div className="flex justify-between">
              <span>Risk Scoring:</span>
              <span className="text-green-600">✓ Available</span>
            </div>
            <div className="flex justify-between">
              <span>Report Generation:</span>
              <span className="text-green-600">✓ Available</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">API Endpoints</h2>
          <div className="space-y-1 text-sm font-mono">
            <div>POST /api/v1/engine/score</div>
            <div>POST /api/v1/engine/suggest-controls</div>
            <div>POST /api/v1/report/render</div>
            <div>POST /api/provision</div>
          </div>
        </div>
      </div>
    </div>
  );
}