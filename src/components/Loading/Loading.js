import Loader from "react-js-loader";

const Loading = () => {
  return (
    <>
      <Loader
        type="bubble-top"
        bgColor={"red"}
        title={"bubble-top"}
        size={100}
      />
    </>
  );
};

export default Loading;
