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
          Tech <span className="hide">Stack</span>,
        </li>

        <li
          className={`${tab === 1 ? "active" : ""}`}
          onClick={() => {
            setTab(1);
          }}
        >
          Design<span className="hide">Skill</span> ,
        </li>
        <li
          className={`${tab === 2 ? "active" : ""}`}
          onClick={() => {
            setTab(2);
          }}
        >
          Work<span className="hide">experience</span>,
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
          Toy<span className="hide"> Project</span>,
        </li>
      </ul>
    </Title>
  );
}
export default Category;

const Title = styled.div`
  @media screen and (min-width: 1330px) {
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
        font-size: 46px;
        height: 60px;
      }
      .active {
        border-bottom: 3px solid #000;
      }
    }
  }
  @media screen and (max-width: 1329px) and (min-width: 1100px) {
    width: 100%;
    ul {
      width: 95%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 20px;
        text-decoration: none;
        list-style: none;
        font-size: 42px;
        height: 60px;
      }
      .active {
        border-bottom: 3px solid #000;
      }
    }
  }
  @media screen and (max-width: 1099px) and (min-width: 980px) {
    width: 90%;
    margin: 0 auto;
    ul {
      width: 90%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 20px;
        text-decoration: none;
        list-style: none;
        font-size: 38px;
        height: 52px;
      }
      .active {
        border-bottom: 3px solid #000;
      }
    }
  }
  @media screen and (max-width: 979px) and (min-width: 780px) {
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
        font-size: 32px;
        height: 42px;
      }
      .active {
        border-bottom: 3px solid #000;
      }
    }
  }
  @media screen and (max-width: 779px) and (min-width: 580px) {
    width: 100%;
    ul {
      width: 100%;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 20px;
        text-decoration: none;
        list-style: none;
        font-size: 26px;
        height: 36px;
      }
      .active {
        border-bottom: 2px solid #000;
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 380px) {
    width: 100%;
    ul {
      width: 96%;
      margin: 0 auto;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 8px;
        text-decoration: none;
        list-style: none;
        font-size: 20px;
        height: 26px;
        .hide {
          display: none;
        }
      }
      .active {
        border-bottom: 2px solid #000;
      }
    }
  }
  @media screen and (max-width: 379px) and (min-width: 230px) {
    width: 100%;
    ul {
      width: 96%;
      margin: 0 auto;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 6px;
        text-decoration: none;
        list-style: none;
        font-size: 20px;
        height: 26px;
        .hide {
          display: none;
        }
      }
      .active {
        border-bottom: 2px solid #000;
      }
    }
  }
`;
