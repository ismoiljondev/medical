import Card from "./Card.tsx";

function Services() {
  return (
    <div className="bg-azure border w-[clamp(300px,100%,1440px)] py-[clamp(20px,11%,160px)] mx-auto">
      <div className="conatainer w-[1050px] mx-auto flex justify-between gap-[10px] max-xl:justify-evenly max-xl:flex-wrap max-xl:gap-y-10 max-xl:w-[822px] max-lg:w-[350px]">
        <Card /* first */ />
        <Card /* second */ />
        <Card /* third */ />
      </div>
    </div>
  );
}

export default Services;
