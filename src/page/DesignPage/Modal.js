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
    width: 1024px;
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
`;
