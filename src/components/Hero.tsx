import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-sm mb-4"
        >
          {"// fullstack developer"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          Lucas Coelho
          <span className="animate-blink text-primary">_</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
        >
          +12 anos construindo sistemas em produção. Java, React, microsserviços, cloud. Foco em performance e código limpo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex gap-6 font-mono text-sm"
        >
          <a
            href="https://github.com/lucasmc20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/devlucascoelho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            linkedin
          </a>
          <a
            href="mailto:bmb.lucas@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            email
          </a>
        </motion.div>
      </div>
    </section>
  );
};
