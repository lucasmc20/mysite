export const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <h2 className="font-mono text-primary text-sm mb-8">{"// contato"}</h2>
      <div className="max-w-xl">
        <p className="text-muted-foreground mb-8">
          Disponível para oportunidades. Vamos conversar.
        </p>
        <div className="flex flex-col gap-3 font-mono text-sm">
          <a
            href="mailto:bmb.lucas@gmail.com"
            className="text-foreground hover:text-primary transition-colors"
          >
            → bmb.lucas@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/devlucascoelho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            → linkedin.com/in/devlucascoelho
          </a>
          <a
            href="https://github.com/lucasmc20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            → github.com/lucasmc20
          </a>
        </div>
      </div>
      <p className="mt-16 text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Lucas Coelho
      </p>
    </section>
  );
};
