import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/graphql-apollo">Graphql Apollo</Link>
      <Link href="/graphql-urql">Graphql URQL</Link>
      <Link href="/rest">Rest</Link>
    </main>
  );
}
