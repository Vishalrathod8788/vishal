// import "./globals.css";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>I'm a MERN Stack Developer</p>
      </header>
      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          I am a passionate MERN stack developer with experience in building
          dynamic web applications. I love coding and creating user-friendly
          interfaces.
        </p>
      </section>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: E-commerce Website</li>
          <li>Project 2: Blogging Platform</li>
          <li>Project 3: Task Management App</li>
        </ul>
      </section>
      <section className={styles.contact}>
        <h2>Contact Me</h2>
        <p>Email: your-email@example.com</p>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
