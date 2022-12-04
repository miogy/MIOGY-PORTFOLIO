import { useState } from "react";
import { useEffect } from "react";
import styles from "../page.module.css";
import Modal from "./Modal";

function Design() {
  const [design, setDesing] = useState([]);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    fetch("/data/designData.json")
      .then((res) => res.json())
      .then((design) => {
        setDesing(design.content);
      });
  });
  return (
    <div className={styles.pageWrap}>
      <h2 className={styles.pageTitle}>ARTWORK</h2> <p>Digital Drawing</p>
      <div className={styles.designWrap}>
        <ul>
          {design
            .slice(0)
            .reverse()
            .map((data) => {
              return (
                <li key={data.id}>
                  <img
                    className="designCard"
                    onClick={() => {
                      setModal(true);
                      setId(data.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src={data.thumb}
                    alt="thumbImg"
                  ></img>
                </li>
              );
            })}
        </ul>
        <div>
          {modal === true ? (
            <Modal design={design} setModal={setModal} id={id} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Design;
