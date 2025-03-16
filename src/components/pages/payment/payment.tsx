import GcashQR from "../../../assets/gcash.png";
import "./payment.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const handleDownload = () => {
    const qrCode = document.createElement("a");
    qrCode.href = GcashQR;
    qrCode.download = "gcash_qr.png";
    document.body.appendChild(qrCode);
    qrCode.click();
    document.body.removeChild(qrCode);
  };
  return (
    <>
      <div className="payment-container">
        <button
          className="payment-container-go-back"
          onClick={() => navigate("/")}
        >
          ⟵ Home
        </button>
        <h1>Payment</h1>
        <img src={GcashQR} alt="Gcash QR" />
        <button className="payment-container-download" onClick={handleDownload}>
          Download QR Code
        </button>
      </div>
    </>
  );
}

export default Payment;
