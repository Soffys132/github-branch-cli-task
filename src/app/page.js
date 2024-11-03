
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Welcome to Modern Web Solutions</h1>
                    <p>Transforming Ideas into Powerful Digital Experiences</p>
                    <button className={styles.cta}>Get Started</button>
                </div>
                <div className={styles.heroImage}>
                    <Image
                        src="/images/hero-image.jpg"
                        alt="Hero Image"
                        width={600}
                        height={400}
                        priority
                    />
                </div>
            </section>

            <section className={styles.features}>
                <h2>Our Core Services</h2>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <h3>Responsive Web Design</h3>
                        <p>Boost your website's speed and performance with our advanced optimization techniques. Fast loading times and smooth user experience guaranteed.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>SEO Excellence</h3>
                        <p>Improve your search engine rankings with our SEO-focused development approach. We implement best practices to help your website reach its target audience.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>Enhanced Security</h3>
                        <p>Protect your website with industry-leading security measures. We implement robust security protocols to safeguard your data and user information.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}