import { logs } from "../../data/logs";

export default function NetworkPage() {
  return (
    <main className="page">
      <h1>THINKING NETWORK</h1>

      {logs.map((log) => (
        <div key={log.id} className="card">
          <h2>{log.title}</h2>
          <p>{log.thought}</p>
        </div>
      ))}
    </main>
  );
}
