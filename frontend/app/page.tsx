import Link from 'next/link'

const modules = [
  ['Ask the Archive','/ask','Ask across the authorised archive'],
  ['Document Library','/documents','Ingest and inspect documents'],
  ['Archive Insights','/insights','Find risks and missing information'],
  ['Knowledge Graph','/graph','Explore document relationships'],
]

export default function Dashboard() {
  return <main className="mx-auto max-w-7xl px-6 py-10">
    <header className="mb-8"><p className="text-sm font-medium text-neutral-500">WORKSPACE</p><h1 className="mt-1 text-3xl font-semibold tracking-tight">Overview</h1></header>
    <section className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
      {[['Documents','0'],['Processed','0'],['Indexed pages','0'],['Extracted entities','0']].map(([label,value]) => <div key={label} className="bg-white p-5"><p className="text-sm text-neutral-500">{label}</p><p className="mt-2 text-3xl font-semibold">{value}</p></div>)}
    </section>
    <section className="mt-8 grid gap-4 md:grid-cols-2">
      {modules.map(([title,href,description]) => <Link key={href} href={href} className="rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm"><h2 className="font-semibold">{title}</h2><p className="mt-1 text-sm text-neutral-500">{description}</p></Link>)}
    </section>
  </main>
}
