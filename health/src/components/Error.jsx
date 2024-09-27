let Error = ({ passItems }) => {
  return (
    <>
      {/* turnery operator */}
      {passItems.length === 0 ? <h3 id="head">I am hungry.</h3> : null}
    </>
  );
};
export default Error;
