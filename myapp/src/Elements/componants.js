import style from "./componants.module.css";
let Ele = ({btnhan}) => {
  let btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="btncontainer">
      {btn.map((btn) => (
        <button className={style.bttn} onClick={()=>{
          alert(`${btn} btn is clicked`)
        }}>{btn}</button>
      ))}
      
    </div>
  );
};
export default Ele;
