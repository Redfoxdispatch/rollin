import { ImageResponse } from "next/og";

export const alt = "Rollin, AI Route Decision Engine for Trucking Carriers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A1626",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(47,107,255,0.35) 0%, rgba(10,22,38,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 40,
              borderRadius: 6,
              backgroundColor: "#2F6BFF",
              transform: "skewX(-16deg)",
            }}
          />
          <div
            style={{
              display: "flex",
              width: 14,
              height: 40,
              borderRadius: 6,
              backgroundColor: "#2F6BFF",
              opacity: 0.7,
              transform: "skewX(-16deg)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 46,
              fontWeight: 700,
              color: "#ffffff",
              marginLeft: 10,
            }}
          >
            Rollin
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 900,
          }}
        >
          Plan your next move, not just your next load.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 760,
          }}
        >
          An AI route decision engine built for trucking carriers.
        </div>
      </div>
    ),
    { ...size }
  );
}
