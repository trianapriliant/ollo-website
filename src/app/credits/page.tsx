"use client";

import styles from "./page.module.css";
import {
    Code,
    Database,
    Atom,
    Page,
    Type,
    Heart,
} from "iconoir-react";
import { FaFlutter, FaReact, FaGoogle } from "react-icons/fa6";
import { SiNextdotjs, SiDart } from "react-icons/si";

const techStack = {
    mobile: [
        {
            name: "Flutter",
            desc: "Hybrid App Framework",
            icon: FaFlutter,
            colorClass: "blueAlpha"
        },
        {
            name: "Dart",
            desc: "Programming Language",
            icon: SiDart,
            colorClass: "cyanAlpha"
        },
        {
            name: "Isar Database",
            desc: "High-performance Local DB",
            icon: Database,
            colorClass: "purpleAlpha"
        },
        {
            name: "Riverpod",
            desc: "State Management",
            icon: Atom,
            colorClass: "tealAlpha"
        }
    ],
    web: [
        {
            name: "Next.js",
            desc: "React Framework",
            icon: SiNextdotjs,
            colorClass: "darkAlpha"
        },
        {
            name: "React",
            desc: "UI Library",
            icon: FaReact,
            colorClass: "blueAlpha"
        },
        {
            name: "Iconoir",
            desc: "Open Source Icons",
            icon: Page,
            colorClass: "orangeAlpha"
        }
    ],
    design: [
        {
            name: "Google Fonts",
            desc: "Typography (Poppins)",
            icon: FaGoogle,
            colorClass: "redAlpha"
        },
        {
            name: "Material Icons",
            desc: "App Icon Set",
            icon: FaGoogle,
            colorClass: "blueAlpha"
        }
    ]
};

export default function CreditsPage() {
    return (
        <main className={styles.page}>
            <section className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.badge}>Built With</span>
                    <h1 className={styles.title}>
                        Powered by<br />
                        <span className={styles.gradient}>Open Source</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Ollo is built on the shoulders of giants. We gratefully acknowledge
                        the incredible tools and libraries that make this project possible.
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* Mobile App */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Mobile App Core</h2>
                    <div className={styles.grid}>
                        {techStack.mobile.map((item) => (
                            <div key={item.name} className={styles.card}>
                                <div className={`${styles.iconWrapper} ${styles[item.colorClass]}`}>
                                    <item.icon />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.techName}>{item.name}</span>
                                    <span className={styles.techDesc}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Website */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Website & Web App</h2>
                    <div className={styles.grid}>
                        {techStack.web.map((item) => (
                            <div key={item.name} className={styles.card}>
                                <div className={`${styles.iconWrapper} ${styles[item.colorClass]}`}>
                                    <item.icon />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.techName}>{item.name}</span>
                                    <span className={styles.techDesc}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Design */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Design & Assets</h2>
                    <div className={styles.grid}>
                        {techStack.design.map((item) => (
                            <div key={item.name} className={styles.card}>
                                <div className={`${styles.iconWrapper} ${styles[item.colorClass]}`}>
                                    <item.icon />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.techName}>{item.name}</span>
                                    <span className={styles.techDesc}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className={styles.thanks}>
                    <p className={styles.thanksText}>
                        And a special thanks to all the contributors of these projects. <Heart style={{ color: 'red', display: 'inline', verticalAlign: 'middle' }} width={20} />
                    </p>
                </div>
            </div>
        </main>
    );
}
