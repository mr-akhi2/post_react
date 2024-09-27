import "./Container.css";
const Container = (props) => {
  return <div id="main">{props.children}</div>;
};
export default Container;

// props.children used for the taking all the passing data to the do inside in this
