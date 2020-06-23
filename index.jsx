import { run, css } from "uebersicht";

const container = css({
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: "flex",
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 3,
  fontFamily: "Fira Code"
});

const text = css({
  fontSize: 110,
  fontFamily: "Fira Code",
  color: "black",
  opacity: 0.1
});

const result = (data, key) => {
  try {
    return JSON.parse(data)[key];
  } catch (e) {
    return "";
  }
};

export const render = ({ output, error }) => {
  const date = new Date();
  return (
    <div className={container}>
      <h1 className={text}>
        {date.getHours()}:{date.getMinutes()}
      </h1>
      <p>{output}</p>
    </div>
  );
};

export default null;
