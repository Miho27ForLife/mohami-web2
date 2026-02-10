import { useParams } from "react-router-dom";

export default function LibraryDetails() {
  const { id } = useParams();
  return (
    <div style={{ padding: 24 }}>
      <h1>Library Details</h1>
      <p>id: {id}</p>
    </div>
  );
}
