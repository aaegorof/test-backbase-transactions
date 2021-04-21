import React from "react";
import "./panel.scss";

type Props = {
  title: string;
  icon?: string;
  size?: "small";
};

const Panel: React.FC<Props> = (props) => {
  const { title, icon, children, size } = props;

  return (
    <div className={`panel-wrap ${size}`}>
      <div className="panel-header">
        {icon && <img src={icon} alt={title} />}
        <div className={"h3"}>{title}</div>
      </div>
      <div className="panel-body">{children}</div>
    </div>
  );
};

export default Panel;
