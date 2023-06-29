import styles from "../styles/components/SkillMeter.module.css";

export default function SkillMeter({ logo, skill, rating }) {
  return (
    <div className={styles.container}>
      <div className={styles.skillContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={logo} alt={skill} />
        </div>
        <p className={styles.skill}>{skill}</p>
      </div>

      <div className={styles.skillMeter}>
        {Array.from({ length: 5 }).map((_, index) => {
          return index < rating ? (
            <div key={index} className={styles.blueBox}></div>
          ) : (
            <div key={index} className={styles.greyBox}></div>
          );
        })}
      </div>
    </div>
  );
}
