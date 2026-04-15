import { motion } from "framer-motion";

const categories = [
  { label: "Linguagens", items: ["Java", "TypeScript", "JavaScript", "PHP", "Python"] },
  { label: "Back-end", items: ["Spring Boot", "Node.js", "Express", "Laravel"] },
  { label: "Front-end", items: ["React.js", "React Native", "AngularJS"] },
  { label: "Banco de Dados", items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"] },
  { label: "DevOps", items: ["Docker", "OpenShift", "CI/CD", "Azure", "GitHub Actions"] },
  { label: "Qualidade", items: ["JUnit", "Jest", "SonarQube", "ESLint"] },
];

export const Stack = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm mb-12">{"// stack"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-sm bg-secondary text-secondary-foreground font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
