const clients = [
  'Novartis', 'Bayer', 'Merck', 'AstraZeneca', 'ViiV Healthcare',
  'Boehringer Ingelheim', 'Neurocrine', 'Incyte', 'Insmed',
  'Alkermes', 'Janssen', 'ITCI', 'Hemgenix', 'Idelvion',
]

export default function ClientsBar() {
  const doubled = [...clients, ...clients]
  return (
    <div className="bg-bg-2 border-y border-white/[0.06] py-5 overflow-hidden group">
      <div className="flex gap-16 w-max animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((c, i) => (
          <span
            key={i}
            className="text-[0.85rem] font-bold text-t3 uppercase tracking-widest shrink-0 hover:text-t2 transition-colors cursor-default"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
