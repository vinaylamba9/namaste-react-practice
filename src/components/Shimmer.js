const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="m-5 h-[200px] w-[200px] bg-gray-200"></div>
        ))}
    </div>
  );
};

export default Shimmer;
