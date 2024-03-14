"use client";
import PageMenu from "./PageMenu";
import ToogleButton from "./ToogleButton";
import React, { useState } from "react";

export default function Navigation(props) {
  const [childState, setChildState] = useState(false);

  const updateChildState = (newState) => {
    setChildState(newState);
  };

  return (
    <div id="topNav" className={`nav `}>
      <div id="mntop" className="menu">
        <div className="header-side-content">
          <ToogleButton
            initialState={childState}
            updateState={updateChildState}
          />

          {console.log(childState)}
        </div>

        <a href="/">logo</a>

        <div className="header-side-content">
          <nav id="nav-social">
            <ul className="unstyled">
              <li>
                <a href="">YouTube</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <PageMenu routes={props.routes} status={childState} />
    </div>
  );
}

{
}
