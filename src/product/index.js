import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>상품 상세 페이지 {id}</h1>
    </div>
  );
}

export default ProductPage;
