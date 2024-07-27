"use client";
import { useRef, useState } from "react";
import ColorPickerComponent from "./components/ColorPicker";

const HomePage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [color, setColor] = useState("rgba(47, 119, 150, 0.7)");

  const handleChangeColor = (newColor: string) => {
    setColor(newColor);
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        try {
          const elementsToChange = [
            ".header",
            ".footer",
            ".section",
            ".cta-button",
          ];
          elementsToChange.forEach((selector) => {
            const targetElements = iframeDocument.querySelectorAll(selector);
            targetElements.forEach((targetElement) => {
              (targetElement as HTMLElement).style.backgroundColor = newColor;
            });
          });
        } catch (error) {
          console.error("Error accessing iframe content:", error);
        }
      } else {
        console.log("Iframe document not accessible");
      }
    }
  };

  return (
    <div>
      <h1>Color Picker Example</h1>
      <ColorPickerComponent onChangeColor={handleChangeColor} />
      <div
        style={{
          border: "2px solid #ddd",
          borderRadius: "8px",
          padding: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          外部サイト表示中
        </div>
        <iframe
          ref={iframeRef}
          title="sample.html"
          src="https://yuhi-sa.github.io/color-change-sample/sample.html"
          style={{ width: "100%", height: "1000px", border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
