import React from "react";

function Home() {
    return(
        <>
            <h1>QR GENERATOR</h1>
            <form>
                <label htmlFor="link">Paste the Link here.....</label>
                <input type="text" name="link" id="link" />
                <label htmlFor="colorqr">QR color scheme</label>
                <input type="color" name="colorqr" id="colorqr" />
                <label htmlFor="imgqr">Upload image for QR</label>
                <input type="file" src="imgqr" alt="imgqr" />
                <button>Generate QR</button>
            </form>
        </>
    );
}

export default Home;