import Image from "next/image";

export default function MobileMockup() {
  return (
    <div className="flex justify-center">
      <div className="relative w-78 sm:w-84">
        <div className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-tr from-primary/25 via-transparent to-secondary/35 blur-2xl scale-105" />
        <div className="rounded-[50px] border-8 border-slate-700 bg-background relative overflow-hidden shadow-2xl ring-1 ring-white/10">
          <div className="h-4 w-24 rounded-full z-10 bg-surface absolute top-2.5 left-1/2 -translate-x-1/2" />
          <Image
            src="/images/app-preview.png"
            priority
            alt="Mobile mockup"
            width={1080}
            height={2424}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
