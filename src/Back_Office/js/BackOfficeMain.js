import React, { useState } from "react";

import { BackOfficeSidebar } from "./BackOfficeSidebar";
import { BackOfficeView } from "./BackOfficeView";

export function BackOfiiceMain(){
    return(
        <div className="ComBackOfficeMain">
            <BackOfficeSidebar></BackOfficeSidebar>
            <BackOfficeView></BackOfficeView>

        </div>
    );
}
