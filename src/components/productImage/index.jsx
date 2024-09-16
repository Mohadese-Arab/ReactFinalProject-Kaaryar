const ProductImage = ({ product }) => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/${product[0].img_url}`} alt="product" />
    </div>
  );
};

export default ProductImage;
