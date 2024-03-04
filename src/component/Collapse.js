const Collapse = ({id="collapseWidthExample"}) => {
  return (
    <>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          Toggle width collapse
        </button>
      </p>
      <div style={{ minHeight:"120px"}}>
        <div className="collapse collapse-horizontal" id={id}>
          <div className="card card-body" style="width: 300px;">
            This is some placeholder content for a horizontal collapse. It's
            hidden by default and shown when triggered.
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
