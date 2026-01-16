const PrivacyMessage = () => {
  return (
    <div className="alert alert-warning mb-5 text-center" role="alert">
      <i className="bi bi-shield-lock"></i>
      <p className="lead mb-0 fw-semibold">🔒 Counter is Private</p>
      <small className="text-muted">
        Toggle Privacy to view the counter value
      </small>
    </div>
  );
};

export default PrivacyMessage;
