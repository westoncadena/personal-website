import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section with background image */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/profile.jpg"
            alt="Background"
            fill
            className="hero-image"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="flex min-h-screen flex-col justify-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl max-w-2xl">
              Weston Cadena
            </h1>
            <h2 className="text-xl text-white/80 sm:text-2xl max-w-xl">
              Graduate Computer Science Student
            </h2>
            <p className="text-lg text-white/70">
              Building elegant solutions to complex problems, alongside my journey as a part-time adventurer.
            </p>
            <div className="flex gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-6 py-3 text-sm font-medium text-black hover:bg-white"
              >
                About Me
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
              >
                View Portfolio
              </Link>
              <Link
                href="/posts"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
              >
                Read Blog
              </Link>
              {/* <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
              >
                View Projects
              </Link> */}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
