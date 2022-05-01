import styled from "styled-components";

const Test = () => {
  return (
    <ImageTest>
      <div>Testing Text</div>
    </ImageTest>
  );
};

export default Test;

const ImageTest = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/images/job-ads.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  & > div {
    text-align: center;
  }
`;
