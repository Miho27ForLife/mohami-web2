import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { category, id } = useParams();
  return (
    <div style={{ padding: 24 }}>
      <h1>Service Details</h1>
      <p>category: {category}</p>
      <p>id: {id}</p>
    </div>
  );
}
