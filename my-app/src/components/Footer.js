import React from "react";

const Footer=()=>{
    const year= new Date().getFullYear();
    return (
        <div className="foot navbar fixed-bottom">
            copyright©{year}
        </div>
    );
}

export default Footer;