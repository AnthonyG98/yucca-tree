export default function MenuProps(props) {
  return (
    <>
      <div className="menu-category">
        {props.menuName}
        <p className="hours" id="price">
          {props.menuPrice}
        </p>
      </div>
      <p className="menu-desc">{props.menuDesc}</p>
    </>
  );
}
