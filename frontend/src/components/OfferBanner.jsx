import { useNavigate } from "react-router-dom";
function OfferBanner() {

    const navigate=useNavigate()
    return (
        <section className="offer-banner">
            <div className="offer-content">
                <h2>🔥 Limited Time Offer</h2>
                <p>Get up to 50% off on selected items — today only!</p>
                <button onClick={()=>navigate("/products")} className="btn-primary">Grab the Deal</button>
            </div>
        </section>
    );
}

export default OfferBanner;
