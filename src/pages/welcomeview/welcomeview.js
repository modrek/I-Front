import React, { useState } from "react";

import "./welcomeview.scss";

const welcomeview = (props) => {
    return (
     	<div className="row pt-5">
        		<header>
				<h1>Welcome View</h1>
				<h4>
					Automation positively transforms the lives of people and business.
				</h4>
				<p className="mt-4">
					ION software helps you improve decision-making, increase efficiency,
					simplify complex processes and empower your people. We enable
					financial institutions, central banks and corporations to digitize
					and automate their most business critical processes.
				</p>
				<p className="mt-4">
					We want you to build a long-term career with us, and we’ll support
					and encourage you every step of the way. Our leadership development
					program is your chance to: Join us at the forefront of industry
					innovation, challenging boundaries, questioning assumptions and
					transforming the lives of people and business. Partner with
					customers who are household names around the world. Use cutting-edge
					technology to automate business-critical processes. Work alongside
					talented, ambitious people from many different backgrounds and learn
					from mentoring by some of the most knowledgeable people in their
					fields. Expand your horizons by spending part of the program at our
					offices around the world.
        			</p>
       		 </header>
    		  </div>
    );
};

export default welcomeview;
