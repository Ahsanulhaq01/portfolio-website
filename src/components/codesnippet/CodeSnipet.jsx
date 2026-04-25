import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "./codesnipet.css";

function CodeSnipet() {
  const code = `import React from 'react';
import { motion } from 'motion/react';

    const PortfolioHero = () => {
        return (
            <section>
                <h1>Build Scale</h1>
            </section>
        );
    };`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
    <div className="code-snipet-container">
    <pre className="line-numbers">
        <code className="language-jsx">{code}</code>
      </pre>
    </div>
      
    </>
  );
}

export default CodeSnipet;
