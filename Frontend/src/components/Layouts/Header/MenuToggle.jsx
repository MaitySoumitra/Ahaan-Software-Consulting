import React,{useRef} from "react";
import "./MenuToggle.css";

const MenuToggle = React.forwardRef(({ toggle, isOpen }, ref) => {
  return (
    <div
      ref={ref}
      className={`menu-toggle ${isOpen ? "open" : ""}`}
      onClick={toggle}
    >
      <svg className="hamburger" width="30" height="30" viewBox="0 0 30 30">
        <path className="line1" d="M4 6h22" stroke="#C78A2B" strokeWidth="3" strokeLinecap="round" />
        <path className="line2" d="M4 14h22" stroke="#C78A2B" strokeWidth="3" strokeLinecap="round" />
        <path className="line3" d="M4 22h22" stroke="#C78A2B" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
});

export default MenuToggle;
