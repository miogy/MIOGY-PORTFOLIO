import styled from "styled-components";

function Category({ tab, setTab }) {
  return (
    <Title>
      <ul
        onClick={(e) => {
          window.scrollTo({ top: 800, behavior: "smooth" });
        }}
      >
        <li
          className={`${tab === 0 ? "active" : ""}`}
          onClick={() => {
            setTab(0);
          }}
        >
          Tech Stack,
        </li>

        <li
          className={`${tab === 2 ? "active" : ""}`}
          onClick={() => {
            setTab(2);
          }}
        >
          Design Skill,
        </li>
        <li
          className={`${tab === 1 ? "active" : ""}`}
          onClick={() => {
            setTab(1);
          }}
        >
          Workexperience,
        </li>
        <li
          className={`${tab === 3 ? "active" : ""}`}
          onClick={() => {
            setTab(3);
          }}
        >
          Project,
        </li>
        <li
          className={`${tab === 4 ? "active" : ""}`}
          onClick={() => {
            setTab(4);
          }}
        >
          Toy Project,
        </li>
      </ul>
    </Title>
  );
}
export default Category;

const Title = styled.div`
  @media screen and (min-width: 581px) {
    width: 100%;
    ul {
      width: 90%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 20px;
        text-decoration: none;
        list-style: none;
        font-size: 2.8em;
        height: 60px;
      }
      .active {
        border-bottom: 3px solid #000;
      }
    }
  }
  @media screen and (max-width: 580px) and (min-width: 230px) {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 20px;
        text-decoration: none;
        list-style: none;
        font-size: 1.6em;
        height: 36px;
      }
      .active {
        border-bottom: 2px solid #000;
      }
    }
  }
`;
