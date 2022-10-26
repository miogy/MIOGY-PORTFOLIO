import styled from "styled-components";

function Category({ tab, setTab }) {
  return (
    <Title>
      <ul>
        <li
          className={`${tab === 0 ? "active" : ""}`}
          onClick={() => setTab(0)}
        >
          Tech Stack,
        </li>

        <li
          className={`${tab === 2 ? "active" : ""}`}
          onClick={() => setTab(2)}
        >
          Design Skill,
        </li>
        <li
          className={`${tab === 1 ? "active" : ""}`}
          onClick={() => setTab(1)}
        >
          Workexperience,
        </li>
        <li
          className={`${tab === 3 ? "active" : ""}`}
          onClick={() => setTab(3)}
        >
          Project,
        </li>
        <li
          className={`${tab === 4 ? "active" : ""}`}
          onClick={() => setTab(4)}
        >
          Toy Project,
        </li>
      </ul>
    </Title>
  );
}
export default Category;

const Title = styled.div`
  width: 100%;
  ul {
    width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0;
    li {
      padding-right: 20px;
      margin-bottom: 6px;
      text-decoration: none;
      list-style: none;
      font-size: 42px;
      height: 60px;
    }
    .active {
      border-bottom: 3px solid #000;
    }
  }
`;
