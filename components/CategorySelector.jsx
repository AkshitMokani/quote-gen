export default function CategorySelector({ categories = [], value, onChange }) {
  const all = ['random', ...categories];
  return (
    <div>
      <div className="small" style={{ marginBottom: 8 }}>
        Choose category
      </div>
      <div className="category-grid">
        {all.map((c) => (
          <button
            key={c}
            className={`category-btn ${value === c ? "active" : ""}`}
            onClick={() => onChange(c)}
            type="button"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
