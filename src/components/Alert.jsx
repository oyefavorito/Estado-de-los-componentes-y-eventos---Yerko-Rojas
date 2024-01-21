function Alert({ message, color }) {
  return (
    <>
      <div className={`alert alert-${color}`} role="alert">
        {message}
      </div>
    </>
  );
}

export default Alert;