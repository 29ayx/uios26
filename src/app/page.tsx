import React from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center gap-12 p-8 sm:p-16 bg-[url('/952453.jpg')] bg-cover bg-center text-foreground overflow-hidden">
      {/* Decorative background circles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* top-left circle */}
        <div className="rounded-full bg-gradient-to-br from-sky-400/40 via-green-300/30 to-purple-200 w-[600px] h-[600px] -top-52 -left-52 absolute blur-3xl opacity-60"></div>
        {/* bottom-right circle */}
        <div className="rounded-full bg-gradient-to-br from-green-400/40 via-sky-300/30 to-white/20 w-[700px] h-[700px] -bottom-60 -right-60 absolute blur-3xl opacity-60"></div>
        {/* center circle */}
        <div className="rounded-full bg-gradient-to-br from-sky-400/40 via-green-300/30 to-purple-300 w-[500px] h-[500px] bottom-48 left-1/2 -translate-x-1/2 absolute blur-3xl opacity-50"></div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">UI OS 26</h1>
      <ThemeToggle />

      {/* Button Section */}
      <section id="button" className="w-full max-w-2xl flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Button</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="inline-flex items-center justify-center glass interactable px-4 py-2 dark:text-white transition-colors text-sm font-medium hover:bg-white/20">
            Primary
          </button>
          <button className="inline-flex items-center justify-center glass interactable px-4 py-2 dark:text-white transition-colors text-sm font-medium hover:bg-white/20">
            Outline
          </button>
        </div>
        <pre className="text-xs text-gray-800  bg-black/[.05] dark:bg-white/[.06] p-4 rounded overflow-auto">
{`<button className="inline-flex items-center justify-center glass interactable px-4 py-2 text-neutral-900">Primary</button>
<button className="inline-flex items-center justify-center glass interactable px-4 py-2 text-neutral-900">Outline</button>`}
        </pre>
      </section>

      {/* Card Section */}
      <section id="card" className="w-full max-w-2xl flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Card</h2>
        <div className="glass interactable p-6 flex flex-col gap-3 w-full">
          <h3 className="text-lg font-medium text-white dark:text-black">Card title</h3>
          <p className="text-sm text-white dark:text-black">This is a simple card component.</p>
          <button className="self-start mt-4 inline-flex items-center justify-center glass interactable px-4 py-2 dark:text-black">Action</button>
        </div>
        <pre className="text-xs text-gray-800  bg-black/[.05] dark:bg-white/[.06] p-4 rounded overflow-auto">
{`<div className="glass interactable p-6 flex flex-col gap-3">
  <h3 className="text-lg font-medium">Card title</h3>
  <p className="text-sm">This is a simple card component.</p>
  <button className="self-start mt-4 inline-flex items-center justify-center glass interactable px-4 py-2 dark:text-black">Action</button>
</div>`}
        </pre>
      </section>

      {/* Navbar Section */}
      <section id="navbar" className="w-full max-w-2xl flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-black dark:text-white">Navbar</h2>
        <nav className="glass interactable w-full">
          <ul className="flex items-center justify-between px-6 py-3 text-sm font-medium">
            <li>
              <a href="#" className="dark:text-black hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="dark:text-black hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="dark:text-black hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="dark:text-black hover:underline">
                About
              </a>
            </li>
          </ul>
        </nav>
        <pre className="text-xs text-gray-800 bg-black/[.05] dark:bg-white/[.06] p-4 rounded overflow-auto">
{`<nav className="glass interactable w-full">
  <ul className="flex items-center justify-between px-6 py-3 text-sm font-medium">
    <li><a href="#" className="dark:text-black">Home</a></li>
    <li><a href="#" className="dark:text-black">Features</a></li>
    <li><a href="#" className="dark:text-black">Pricing</a></li>
    <li><a href="#" className="dark:text-black">About</a></li>
  </ul>
</nav>`}
        </pre>
      </section>
    </main>
  );
}
