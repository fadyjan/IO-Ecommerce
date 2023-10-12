import CardShimmerLoading from "../components/CardShimmerLoading/CardShimmerLoading.jsx";
export const renderShimmers = () => {
  const shimmers = [];
  for (let i = 0; i < 8; i++) {
    shimmers.push(<CardShimmerLoading key={i} />);
  }
  return shimmers;
};
