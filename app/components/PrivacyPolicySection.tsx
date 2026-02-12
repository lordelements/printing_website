export const metadata = {
  title: "Privacy Policy | Vivian Printing",
  description: "Privacy Policy for Vivian Printing website and applications.",
};

export const PrivacyPolicySection = () => {
  const sections = [
    { id: "collect", title: "Information We Collect" },
    { id: "use", title: "How We Use Information" },
    { id: "protection", title: "Data Protection" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Header */}
      <header className="border-b bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: February 12, 2026
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Side Navigation - Desktop only */}
          <aside className="hidden md:block w-64 shrink-0">
            <nav className="sticky top-24 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">
                Contents
              </p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Body */}
          <main className="flex-1 space-y-12 leading-relaxed text-balance">
            <section>
              <p className="text-lg text-muted-foreground leading-8">
                Vivian Printing values your privacy. This Privacy Policy explains how we collect,
                use, and protect your information when you use our website and related applications.
              </p>
            </section>

            <section id="collect" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="h-1 w-6 bg-primary rounded-full" />
                Information We Collect
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Name and contact details",
                  "Messages or inquiries",
                  "Browser and device data",
                  "Order history"
                ].map((item) => (
                  <div key={item} className="p-4 rounded-xl border bg-card shadow-sm">
                    <p className="font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="use" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="h-1 w-6 bg-primary rounded-full" />
                How We Use Information
              </h2>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "To respond to inquiries and customer orders",
                  "To improve our services and website experience",
                  "To provide dedicated customer support"
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="protection" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="h-1 w-6 bg-primary rounded-full" />
                Data Protection
              </h2>
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 dark:bg-blue-950/20 dark:border-blue-900">
                <p>
                  We implement high-standard security measures to protect your personal
                  information. We strictly <strong>do not sell, trade, or share</strong> your 
                  personal data with third parties.
                </p>
              </div>
            </section>

            <section id="contact" className="scroll-mt-24 border-t pt-12">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6">If you have any questions, reach out to our team:</p>
              <a 
                href="mailto:vivianjoy@gmail.com" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                vivianjoy@gmail.com
              </a>
            </section>

            <footer className="pt-10 text-sm text-muted-foreground italic">
              This Privacy Policy may be updated periodically to reflect changes in our practices.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}