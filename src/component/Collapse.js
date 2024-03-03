const Collapse = () => {
  const htmlContent = `
        <p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Toggle width collapse
          </button>
        </p>
        <div style="min-height: 120px;">
          <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div class="card card-body" style="width: 300px;">
              This is some placeholder content for a horizontal collapse. It's
              hidden by default and shown when triggered.
            </div>
          </div>
        </div>
        ;
  `;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </>
  );
};

export default Collapse;
