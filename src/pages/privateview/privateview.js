import React, { useState } from "react";

import "./privateview.scss";

const privateview = (props) => {
     return (
          <div className="row pt-5">
               <header>
                    <h1>Private View</h1>
                    <h4>Software developers</h4>
                    <p className="mt-4">
                         As a full-time developer, you’ll start with a 2-month induction to
                         learn about our technologies, followed by a rotational program where
                         you’ll work hands-on in a series of agile development teams. If you’re
                         successful, you’ll be comfortable in a multicultural and
                         multidisciplinary environment, and you’ll be able to specialize in an
                         area that interests you.
                    </p>
               </header>
          </div>
     );
};

export default privateview;
