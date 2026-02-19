export default function FooterDW() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f3f4f6",
        borderRadius: "12px",
        paddingBlock: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src="/assets/dw-point.svg"
        alt="dw-point"
        style={{
          width: "30px",
          height: "30px",
          objectFit: "contain",
        }}
      />

      <p
        style={{
          margin: 0,
          fontSize: "13px",
          fontStyle: "italic",
          color: "#2d2d2d",
        }}
      >
        Dimensi Web: Learning Arena
      </p>
    </div>
  );
}
