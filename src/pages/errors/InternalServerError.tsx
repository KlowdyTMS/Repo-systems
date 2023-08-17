export default function InternalServerError() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <img
        src="/imgs/internal-server-error.svg"
        width={"500"}
        style={{ marginBottom: "20px" }}
      />
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
        Internal Server Error
      </h2>
    </div>
  );
}
