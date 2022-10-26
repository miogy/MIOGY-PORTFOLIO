import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import { SiAdobeacrobatreader } from "react-icons/si";

function Info() {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  const book = useRef();

  useEffect(() => {
    setTimeout(() => {
      setTotal(book.current.pageFlip().getPageCount());
    }, 1000);
  }, []);

  const updatePage = ({ data }) => setPage(data + 2);

  return (
    <StyledInfo style={{ padding: "5% 0" }}>
      {/* <span
        className="next button"
        onClick={() => book.current.pageFlip().flipNext()}
      ></span> */}
      <div
        className="pdfLink"
        onClick={() => {
          window.location.href =
            "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:adffedc3-1ec3-331e-82f9-018fe1ae2a7e";
        }}
      >
        <SiAdobeacrobatreader /> <strong>PDF로 보기</strong>
      </div>
      <HTMLFlipBook
        showCover={false}
        onFlip={updatePage}
        width={600}
        height={700}
        ref={book}
        useMouseEvents={true}
        flippingTime={500}
        maxShadowOpacity={0.6}
      >
        {pageData.map((data) => {
          return (
            <div className="page" key={data.id}>
              <img src={data.src} alt="page" />
            </div>
          );
        })}
      </HTMLFlipBook>
      {/* <span
        onClick={() => book.current.pageFlip().flipPrev()}
        className="previous button"
      ></span> */}

      <span className="info-page">
        {page} - {total}
      </span>
    </StyledInfo>
  );
}
export default Info;

const pageData = [
  {
    id: 0,
    src: "https://velog.velcdn.com/images/miogy/post/aee6b324-7b05-42c1-b553-6370f9c6a9d9/image.png",
  },
  {
    id: 1,
    src: "https://velog.velcdn.com/images/miogy/post/d50c782f-c475-4e06-938a-fca31c1c8988/image.png",
  },
  {
    id: 2,
    src: "https://velog.velcdn.com/images/miogy/post/2b7213a6-3427-4bbc-8c88-809d10c4bc5f/image.png",
  },
  {
    id: 3,
    src: "https://velog.velcdn.com/images/miogy/post/d6421677-f65c-4b7c-9e4d-d59f77bf8f99/image.png",
  },
  {
    id: 4,
    src: "https://velog.velcdn.com/images/miogy/post/898c501d-4662-4a79-96e2-0fd57958bd9f/image.png",
  },
  {
    id: 5,
    src: "https://velog.velcdn.com/images/miogy/post/d1d7b9f7-d910-4cc2-ba1a-6a842f4fcb22/image.png",
  },
  {
    id: 6,
    src: "https://velog.velcdn.com/images/miogy/post/4798eade-8b6b-40b4-a9cc-e9f9626225df/image.png",
  },
  {
    id: 7,
    src: "https://velog.velcdn.com/images/miogy/post/0ede5364-1d44-4563-83b7-84f90b0ea094/image.png",
  },
  {
    id: 8,
    src: "https://velog.velcdn.com/images/miogy/post/eaf431ac-327b-4baf-bcee-6ca5b925f1c4/image.png",
  },
  {
    id: 9,
    src: "https://velog.velcdn.com/images/miogy/post/6e34734d-49a3-4a23-b668-a399303a9d9c/image.png",
  },
  {
    id: 10,
    src: "https://velog.velcdn.com/images/miogy/post/6b76f58a-401c-4a85-ae6a-757933f5d126/image.png",
  },
  {
    id: 11,
    src: "",
  },
];

const StyledInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  text-align: center;
  .pdfLink {
    position: absolute;
    top: 10%;
    left: 5%;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 5px;
    color: lightgray;
    font-size: 14px;
    background-color: #fff;
    z-index: 1000;
    &:hover {
      color: #ec1c24;
      strong {
        color: #333;
        padding-left: 5px;
      }
    }
    strong {
      padding-left: 5px;
    }
  }
  .page {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    background-color: white;
    border: 1px solid lightgray;

    img {
      width: 90%;
      padding-top: 10%;
      margin: 0 auto;
    }
  }

  .info-page {
    width: 100%;
    position: absolute;
    bottom: 10px;
  }
`;
