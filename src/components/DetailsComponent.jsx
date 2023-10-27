import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Img = styled.img``;

export const ImgAlter = styled.div`
  width: 335px;
  height: 220px;
  background: var(--9gray, #d9d9d9);
`;

export const Outer = styled.div`
  margin: 10px;
  cursor: pointer;
`;

export default function DetailsComponents({ title, place, count, tags, id }) {
  const navigate = useNavigate();
  return (
    <Outer onClick={() => navigate(`/inform/${id}`)}>
      <div>
        {/* <Img alt="img" /> */}
        <ImgAlter />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <span>{place}</span>
        <span>{count}</span>
      </div>
      <div>
        <p>{tags}</p>
      </div>
    </Outer>
  );
}
