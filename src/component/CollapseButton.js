import React, { useContext } from 'react';
import { IdContext } from '../context/IdContext';
import { Link } from 'react-router-dom';

/**
 * @param {*} text 버튼에 적힐 이름
 * @param {*} id 내용을 담을 타겟이 되는 id -> useContext로 변경
 * @returns
 */
const CollapseButton = ({ text, setContent, value }) => {
  const id = useContext(IdContext);

  const handleButtonClicked = () => {
    const parsedContent = value.map((data) => {
      console.log(data);
      return (
        <React.Fragment key={data.id}>
          <Link to={data.link}>
            <h3>{data.text}</h3>
          </Link>
        </React.Fragment>
      );
    });
    setContent(parsedContent);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
        onClick={handleButtonClicked}
      >
        {text}
      </button>
    </>
  );
};

export default CollapseButton;
