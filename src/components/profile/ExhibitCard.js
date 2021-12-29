import classes from "./ExhibitCard.module.css";

const ExhibitCard = ({ exhibit, onExhibit }) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <div
        className={classes["exhibit-card"]}
        onClick={onExhibit.bind(this, exhibit)}
      >
        <div className={classes["exhibit-image-box"]}>
          <img
            src={exhibit.image}
            alt="exhibit-card"
            className={classes["exhibit-image"]}
          />
        </div>

        <div className={classes["exhibit-text-box"]}>
          <h3>{formatedName(exhibit.name)}</h3>
          {/* <h3>{averageGrade}</h3> */}
        </div>
      </div>
    </>
  );
};

export default ExhibitCard;
