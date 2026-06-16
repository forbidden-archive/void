import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="label">VOID TOWER ARCHIVE</p>

        <h1>
          人々をつなげているものが、
          <br />
          最も人々から切り離されている。
        </h1>

        <p className="lead">
          通学路の電波塔を観測し、
          VOIDを記録するプロジェクト。
        </p>

        <nav className="nav">
          <Link href="/log">LOG</Link>
          <Link href="/network">NETWORK</Link>
          <Link href="/proposal">PROPOSAL</Link>
        </nav>
      </section>
    </main>
  );
}
