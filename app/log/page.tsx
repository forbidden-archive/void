import { logs } from "../../data/logs";

export default function LogPage() {
  return (
    <main className="page">
      <h1>OBSERVATION LOG</h1>

      <div className="timeline">
        {logs.map((log) => (
          <div key={log.id} className="card">
            <p>{log.date}</p>
            <h2>{log.title}</h2>
            <p>{log.observation}</p>
            <p>{log.thought}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
