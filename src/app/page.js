'use client'
import Index from '@/components/Intro';
import Description from '@/components/Description';
import Projects from '@/components/Projects';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Index />
      <Description />
      <Projects />
      <footer className={styles.footer}>
        <p>Photo was taken from opensource Unsplash. <a target="_blank" href="https://unsplash.com/@robertarnar">Photographer: Robert Arnar</a></p>
        <p><br></br> Created by <a target="_blank" href="https://www.yermakovka.me/">Creative Frontend Developer Alina Ermakova</a></p>
      </footer>
    </main>
  );
}
