import React from "react";

type Props = {
  sidebarComponent?: JSX.Element;
};

const Layout: React.FC<Props> = ({ children, sidebarComponent }) => {
  const mainClassColumns = sidebarComponent ? 8 : 12;

  return (
    <div className={"container"}>
      <div className="row">
        {sidebarComponent && <aside className="col-md-4 pd-md-1-r">{sidebarComponent}</aside>}
        <section className={`pd-md-1-l col-md-${mainClassColumns}`}>{children}</section>
      </div>
    </div>
  );
};

export default Layout;
