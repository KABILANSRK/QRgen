import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRgenerator = () => {
    const [text,setText] = useState("");
    const qrRef = useRef(null);

    const downloadQR = () => {
        if (!text) return;

        const canvas = qrRef.current.querySelector("canvas");
        const url = canvas.toDataURL("image/png");

        const a = document.createElement("a");
        a.href = url;
        a.download = "qrcode.png";
        a.click();
    };

    return (
        <div className="qr-container">
            <h2>QR-Code Generator</h2>
            <input 
                type="text" 
                placeholder="Enter the URL" 
                value={text} 
                size={200} 
                onChange={(e) => setText(e.target.value)} />

            <div ref={qrRef} className="qr-code">
                {text && <QRCodeCanvas value={text} size={200} className="qrgen" />}
            </div>

            {text && (
                <button onClick={downloadQR}>Download QR-Code</button>
            )}
            
        </div>
    );
}

export default QRgenerator;