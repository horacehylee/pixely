import React from "react";

interface Props {
  top: React.ReactElement;
  left: React.ReactElement;
  middle: React.ReactElement;
  right: React.ReactElement;
}

export const Layout: React.FC<Props> = ({ top, left, middle, right }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          color: "#ADADAD"
        }}
      >
        <div style={{ flex: 0, height: 48 }}>
          <div
            style={{
              backgroundColor: "#333333",
              width: "100%",
              height: "100%"
            }}
          >
            {top}
          </div>
        </div>
        <div style={{ flex: 1, display: "flex" }}>
          <div style={{ flex: 0, maxWidth: 64, minWidth: 64 }}>
            <div
              style={{
                backgroundColor: "#2A2D2E",
                width: "100%",
                height: "100%",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 10px -10px inset"
              }}
            >
              {left}
            </div>
          </div>
          <div
            style={{
              flex: 1
            }}
          />
          <div style={{ flex: 0, maxWidth: 48, minWidth: 48 }}>
            <div
              style={{
                backgroundColor: "#2A2D2E",
                width: "100%",
                height: "100%",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 10px -10px inset"
              }}
            >
              {right}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          bottom: "0px",
          left: "64px",
          right: "48px",
          top: "48px",
          position: "fixed",
          display: "block"
        }}
      >
        {middle}
      </div>
    </>
  );
};
