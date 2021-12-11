import Image from "next/image";

export const Ricky = () => {
  return (
    <div>
      <h1>Ricky Page</h1>
      <div>
        <Image src="/tiger.jpg" alt="tiger" width={80} height={80} layout="responsive" />
      </div>
    </div>
  );
};

export default Ricky;
