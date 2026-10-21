import { ImageResponse } from "next/og";

export const alt = "Burhani Technologies: custom software, ERP, automation and cloud services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#14111d", color: "#ffffff", fontFamily: "sans-serif", borderLeft: "16px solid #9867e7" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: 30, color: "#d4c2f3" }}>
        <div style={{ width: 28, height: 28, background: "#9867e7", borderRadius: 6 }} />
        Burhani Technologies
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2, maxWidth: 990 }}>Software built around how your business works.</div>
        <div style={{ fontSize: 28, color: "#c5bdcf" }}>Custom software · ERP · Automation · Cloud</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #514360", paddingTop: 24, fontSize: 23, color: "#d4c2f3" }}>burhanitechnologies.com</div>
    </div>,
    size,
  );
}
