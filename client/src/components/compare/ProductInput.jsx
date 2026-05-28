import "../../pages/dashboard/Compare.css";

const ProductInput = ({ index, value, onChange, placeholder }) => {
  return (
    <div className="product-input-card">
      <p className="product-input-label">Product {index + 1}</p>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        placeholder={placeholder}
        className="product-input"
      />
    </div>
  );
};

export default ProductInput;