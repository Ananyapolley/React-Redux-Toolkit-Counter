const Container = ({ children }) => {
  return (
    <div className="card shadow-lg outer-card border-0 w-100">
      <div className="card-body p-3 p-sm-4 p-md-5">{children}</div>
    </div>
  );
};

export default Container;
