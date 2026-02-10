import { useParams } from "react-router-dom";

export default function ServicesCategory() {
  const { category } = useParams();
  return (
    <div style={{ padding: 24 }}>
      <h1>Services Category</h1>
      <p>category: {category}</p>
    </div>
  );
}
