import styled from "styled-components";

function Modal({ id, design, setModal }) {
  return (
    <StyledModal>
      <h3>Pattern Detaile</h3>
      <div className="designModalWrap">
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          close
        </button>

        {design.map((data) => {
          if (data.id !== id) return null;
          return (
            <ul key={data.id}>
              <li>
                <img src={data.images} alt="pattern" />
              </li>
              <li className="designDetaile">
                <h4>{data.brand}</h4>
                <p>{data.work}</p>
                <p>{data.program}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </StyledModal>
  );
}
export default Modal;

const StyledModal = styled.div`
  @media screen and (min-width: 1100px) {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    .designModalWrap {
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      width: 980px;
      height: 600px;
      padding: 3%;
      background-color: #fff;
      button {
        padding: 5px 10px;
        float: right;
        font-size: 16px;
        background-color: #fff;
        border: 1px solid lightgray;
      }
      ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          width: 50%;
          margin: 0 auto;
          text-decoration: none;
          list-style: none;
          img {
            width: 600px;
          }
        }
        .designDetaile {
          padding: 3%;
          margin-left: 160px;
          border: 1px solid lightgray;
        }
      }
    }
  }
  @media screen and (max-width: 1099px) and (min-width: 580px) {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.3);
    .designModalWrap {
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      padding: 3%;
      background-color: #fff;
      button {
        padding: 5px 10px;
        float: right;
        font-size: 16px;
        background-color: #fff;
        border: 1px solid lightgray;
      }
      ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li {
          margin: 0 auto;
          text-decoration: none;
          list-style: none;
          img {
            width: 400px;
          }
        }
        .designDetaile {
          padding: 3%;
        }
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.3);
    .designModalWrap {
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      padding: 3%;
      background-color: #fff;
      overflow: hidden;
      button {
        padding: 5px 10px;
        float: right;
        font-size: 16px;
        background-color: #fff;
        border: 1px solid lightgray;
      }
      ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li {
          margin: 0 auto;
          text-decoration: none;
          list-style: none;
          img {
            width: 300px;
          }
        }
        .designDetaile {
          padding: 3%;
        }
      }
    }
  }
`;
