import React from "react";
import Profile from "../../../img/idris.png";

function Index() {
  return (
    <div className="read">
      <div className="wrapper">
        <div className="header">
          <h1 className="title">
            The Reason why Security matter get worst in Nigeria
          </h1>
          <span className="poster">
            posted by :<span> Agboola idris</span>
          </span>
          <span className="date">2th,feb 2020</span>
        </div>
        <div className="imgbx">
          <img src={Profile} alt="" />
        </div>
        <div className="article">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ex tempora. Consequuntur officiis illum eveniet quasi aperiam
            repellendus saepe beatae laboriosam? Voluptatum fugiat consequatur
            quia recusandae exercitationem aspernatur a amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti
            consequuntur ipsa optio atque recusandae aperiam eius at voluptates
            maiores odit facere architecto possimus facilis, rem nihil adipisci
            excepturi maxime. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga quisquam ratione blanditiis quae accusantium quos
            repellat suscipit eius, asperiores esse reiciendis adipisci
            doloribus facilis architecto accusamus eum, obcaecati ipsam. Quas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
