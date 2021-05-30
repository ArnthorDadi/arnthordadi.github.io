import React from "react";

function Quote({ Quote, Author }) {
  return (
    <>
        <div className="col">
            <p style={{ textAlign:"left", marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
                "{Quote}"{" "}
            </p>
            <p className="float-right blockquote-footer">{Author}</p>
        </div>
        <br />
        <br />
    </>
  );
}
/*<footer className="blockquote-footer float-right">{Author}</footer>*/

export default Quote;
