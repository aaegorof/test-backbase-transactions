import React from "react";
import './layout.scss'

type Props = {
  sidebarComponent?: JSX.Element
    backgroundImg?: any
};

const Layout: React.FC<Props> = ({ children, sidebarComponent,backgroundImg }) => {
  const mainClassColumns = sidebarComponent ? 13 : 18;
    console.log(backgroundImg)
  return (
    <div className={"app-body"} style={{backgroundImage: `url(${backgroundImg})`}}>
      <div className="container row">
        {sidebarComponent && <aside className="sidebar col-md-5 pd-md-1-r">{sidebarComponent}</aside>}
        <section className={`main-content pd-md-1-l col-md-${mainClassColumns}`}>{children}</section>
      </div>
    </div>
  );
};

export default Layout;
