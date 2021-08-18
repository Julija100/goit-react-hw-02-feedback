import styles from '../Section/Section.module.css'

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
