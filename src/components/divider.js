import React from "react";
import css from "./divider.module.css";
import "../index.css";

export default () => {
  return (
    <div className={css.divider}>
      <div>
        <ul className={css.tabs}>
          <li><a href="#dc-5">Devcon 5</a></li>
          <li><a href="#dc-4">Devcon 4</a></li>
          <li><a href="#dc-3">Devcon 3</a></li>
          <li><a href="#dc-2">Devcon 2</a></li>
          <li><a href="#dc-1">Devcon 1</a></li>
          <li><a href="#dc-0">Devcon 0</a></li>
        </ul>
      </div>
    </div>
  )
}
