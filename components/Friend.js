function Friend({ size }) {
  return (
    <div className="flex justify-between space-x-2">
      <span className="bg-blue-500 p-2 mask-circle"></span>
      <h1 className={`${size ? "hidden" : ""}`}>Louis Breton</h1>
    </div>
  );
}

export default Friend;
