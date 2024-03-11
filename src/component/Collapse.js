/**
 * 토글로 어느 뭉텅이가 보였다 안보였다 하게하는 기능
 * @param {String} id 숨겨지는 타겟을 지칭할수 있는 아이디
 * @param {String} test 토글버튼에 적을 문구
 * @param {*} Content 실질 기능이 담겨야하는 곳
 * @returns 반환되는 코드 : 토클기능버튼 + 까꿍하는 div
 */
const Collapse = ({
  id = 'collapseWidthExample',
  text = 'Toggle width collapse',
  Content = '콘텐츠 누락',
}) => {
  return (
    <>
      <>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {text}
        </button>
      </>
      <div style={{ Height: '120px' }}>
        <div className="collapse collapse-horizontal" id={id}>
          <div className="card card-body" style={{ width: '300px' }}>
            {Content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
