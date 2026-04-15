import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="font-mono text-primary text-sm mb-8">{"// sobre"}</h2>
        <p className="text-foreground text-lg leading-relaxed mb-4">
          Fullstack com +12 anos de estrada. Construo sistemas escaláveis do zero ao deploy — back-end robusto com Java e Spring Boot, front-end fluido com React e React Native.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Forte em arquitetura de microsserviços, integrações REST/SOAP e práticas DevOps com Docker, OpenShift e CI/CD. Pós-graduado em Engenharia de Software, com vivência em times ágeis e foco constante em performance e qualidade de código.
        </p>
      </motion.div>
    </section>
  );
};
