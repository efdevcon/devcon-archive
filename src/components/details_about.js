import React from "react";

/* CSS */
import css from "./details_about.module.css";
import "../index.css";

const DetailsAbout = props => (
  <div className={css.about}>
    <div className={css.aboutColumn}>TODO: Image goes here</div>
    <div className={css.aboutColumn}>
      <h2>Devcon Header Text</h2>
      <p className={css.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum
        integer enim neque volutpat ac tincidunt vitae. Est ante in nibh mauris
        cursus mattis molestie. Egestas congue quisque egestas diam. Vestibulum
        rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at
        risus viverra adipiscing at. Nec feugiat nisl pretium fusce id velit ut.
        Nulla at volutpat diam ut venenatis tellus in metus. Ultrices eros in
        cursus turpis massa tincidunt dui ut ornare. Vitae purus faucibus ornare
        suspendisse sed nisi lacus. Aliquam id diam maecenas ultricies mi eget
        mauris pharetra. Cras pulvinar mattis nunc sed blandit libero. Sed id
        semper risus in hendrerit gravida. Consectetur a erat nam at lectus
        urna. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas
        purus. Tincidunt tortor aliquam nulla facilisi cras. Tincidunt lobortis
        feugiat vivamus at augue. Turpis nunc eget lorem dolor sed. Id venenatis
        a condimentum vitae sapien pellentesque habitant.
      </p>

      <p className={css.aboutText}>
        Volutpat est velit egestas dui id ornare arcu odio. Proin libero nunc
        consequat interdum varius sit amet mattis vulputate. Lorem ipsum dolor
        sit amet consectetur adipiscing elit ut aliquam. Velit laoreet id donec
        ultrices tincidunt arcu non sodales neque. Volutpat consequat mauris
        nunc congue nisi vitae suscipit tellus mauris. Interdum consectetur
        libero id faucibus. Luctus accumsan tortor posuere ac ut consequat.
        Cursus in hac habitasse platea. Et netus et malesuada fames ac turpis
        egestas. Odio tempor orci dapibus ultrices.
      </p>
    </div>
  </div>
);

export default DetailsAbout;
