const Controller = ({ changeCount }) => {
  return (
    <div>
      <button
        onClick={() => {
          changeCount(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          changeCount(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          changeCount(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          changeCount(100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          changeCount(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          changeCount(1);
        }}
      >
        +1
      </button>
    </div>
  );
};
export default Controller;
