import React from "react";
import styles from "./_index.module.css";

export function meta({ }) {
  return [
    { title: "@k0michi" },
  ];
}

interface TechSpec {
  label: string;
  items: string[];
}

const TECH_SPECS: TechSpec[] = [
  {
    label: "Languages",
    items: [
      "Java (including JVM bytecode)",
      "Swift",
      "C / C++",
      "JavaScript / TypeScript",
      "HTML / CSS",
      "C#",
      "Python",
      "SQL"
    ]
  },
  {
    label: "Tools & Frameworks",
    items: [
      "Linux",
      "Docker",
      "Node.js",
      "React / React Router",
      "Express.js",
      "ASP.NET",
      "MariaDB",
      "gRPC",
      "libp2p",
      "WebSocket",
      "OpenGL",
      "WebGPU",
      "GitHub Actions"
    ]
  },
  {
    label: "Technical Interests",
    items: [
      "Distributed Systems",
      "Blockchain",
      "GPU Programming",
      "Asynchronous Programming",
      "Program Analysis",
      "CI / CD",
      "Programming Languages (Specifications & Compilers)"
    ]
  }
];

const Portfolio: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="#" className={styles.navLogo}>@k0michi</a>
          <ul className={styles.navLinks}>
            <li>
              <a href="#technologies" onClick={(e) => handleScroll(e, "technologies")}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#works" onClick={(e) => handleScroll(e, "works")}>
                Works
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.container}>
        <main className={styles.mainContent}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Hajime Fukai</h1>
            <p className={styles.pageSubtitle}>Distributed Systems & Graphics Engineer</p>
          </header>

          <section id="technologies" className={styles.section}>
            <h2 className={styles.sectionTitle}>Technologies</h2>
            <div className={styles.specsTable}>
              {TECH_SPECS.map((spec) => (
                <div key={spec.label} className={styles.specsRow}>
                  <div className={styles.specsLabel}>{spec.label}</div>
                  <div className={styles.specsValue}>
                    <div className={styles.techTags}>
                      {spec.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="works" className={styles.section}>
            <h2 className={styles.sectionTitle}>Works</h2>

            <div className={styles.projectLayout}>
              <div className={styles.projectInfo}>
                <h3>Ephemera</h3>
                <p className={styles.projectDesc}>
                  An autonomous microblogging architecture engineered from scratch. Unlike relay-based protocols such as Nostr, users commit data directly to independent servers that bear the core responsibility of storing and preserving history—ensuring posts survive indefinitely as long as the server remains active. Built for modern expression, it features native support for rich media, including image and video hosting. To visually map and represent cryptographic user identities, every profile features a pixelated identicon generated via a Drunken Bishop-inspired algorithm. The entire server ecosystem is fully containerized, allowing anyone to self-host their own instance instantly via a single Docker command.
                </p>
                <ul className={styles.projectMeta}>
                  <li><strong>Role</strong>Sole Developer (Architecture, Protocol, UI/UX, DevOps)</li>
                  <li><strong>Tech Stack</strong>TypeScript, React, gRPC, libp2p, MariaDB, Docker</li>
                  <li>
                    <strong>GitHub</strong>
                    <a
                      href="https://github.com/k0michi/ephemera"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--text-main)', textDecoration: 'underline' }}
                    >
                      github.com/k0michi/ephemera
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.demoWindow}>
                <iframe src="https://ephemr.org/" title="Live Demo" />
              </div>
            </div>

            <div className={styles.projectLayout} style={{ marginTop: '80px', borderTop: '1px solid var(--border)', paddingTop: '60px' }}>
              <div className={styles.projectInfo}>
                <h3>Asmine</h3>
                <p className={styles.projectDesc}>
                  An advanced extension library for{' '}
                  <a
                    href="https://asm.ow2.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-main)', textDecoration: 'underline' }}
                  >
                    ASM
                  </a>
                  {' '}designed to enable declarative and fluent JVM bytecode manipulation via method chaining. At its core, Asmine implements a custom virtual machine-based regular expression engine tailored specifically for bytecode instructions. This architecture allows developers to perform complex pattern matching over low-level code fragments, bind capture groups dynamically, and execute precise instruction replacements seamlessly.
                </p>
                <ul className={styles.projectMeta}>
                  <li><strong>Role</strong>Sole Developer (Architecture, Implementation, Testing)</li>
                  <li><strong>Tech Stack</strong>Java, ASM</li>
                  <li>
                    <strong>GitHub</strong>
                    <a
                      href="https://github.com/k0michi/asmine"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--text-main)', textDecoration: 'underline' }}
                    >
                      github.com/k0michi/asmine
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.demoWindow} style={{ padding: '24px', overflow: 'auto' }}>
                <pre className={styles.codeContainer}>
                  <code className={styles.codeText}>
                    {`boolean present = MethodQuery.ofNew()
    .addInsns(
        Insns.iconst_0(),
        Insns.iconst_1(),
        Insns.iconst_2()
    )
    .selectCodeFragments(
        Regexes.concatenate(
            CodeRegexes.stencil(InsnStencils.iconst_0()),
            Regexes.bind(0,
                Regexes.concatenate(
                    CodeRegexes.stencil(InsnStencils.iconst_1())
                )
            ),
            CodeRegexes.stencil(InsnStencils.iconst_2())
        )
    )
    .selectBound(0)
    .after()
    .insertAfter(
        InsnStencils.iconst_3()
    )
    .done()
    .done()
    .selectCodeFragment(
        Regexes.concatenate(
            Regexes.anchorBegin(),
            CodeRegexes.stencil(InsnStencils.iconst_0()),
            CodeRegexes.stencil(InsnStencils.iconst_1()),
            CodeRegexes.stencil(InsnStencils.iconst_2()),
            CodeRegexes.stencil(InsnStencils.iconst_3()),
            Regexes.anchorEnd()
        )
    )
    .isPresent();

Assertions.assertTrue(present); // true
`}
                  </code>
                </pre>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;