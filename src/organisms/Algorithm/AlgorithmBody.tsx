import AlgorithmDetail from "./AlgorithmDetail";
import Evidence from "organisms/Evidence";
import Subscription from "./AlgorithmSubscription";

export default function AlgorithmBody() {
  return (
    <>
      <Subscription />
      <AlgorithmDetail />
      <Evidence />
    </>
  );
}
