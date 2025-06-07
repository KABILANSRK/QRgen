import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Link.css"; 

const Link = () => {
    const [text, setText] = useState("");
    const qrRef = useRef(null);
    const [isDark, setIsDark] = useState(false);

    
    const downloadQR = () => {
        if (!text) return;

        setTimeout(() => {
            const canvas = document.querySelector("canvas");
            if (!canvas) return;

            const url = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            a.href = url;
            a.download = "qrcode.png";
            a.click();
        }, 500);
    };

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <div className={`qr-container ${isDark ? "dark" : ""}`}>
            <h2>QR Code Generator</h2>

            <input
                type="text"
                placeholder="Enter the URL or text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="qr-input"
            />

            <div ref={qrRef} className="qr-code">
                {text && (
                    <QRCodeCanvas
                        value={text}
                        size={300}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                        className="qrgen"
                    />
                )}
            </div>

            {text && (
                <>
                    <button className="download-btn" onClick={downloadQR}>
                        📥 Download QR Code
                    </button>

                    <div className="preview">
                        <h4>Preview:</h4>
                        <img
                            src={document.querySelector("canvas")?.toDataURL() || ""}
                            alt="QR Code Preview"
                            width={150}
                            height={150}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Link;
