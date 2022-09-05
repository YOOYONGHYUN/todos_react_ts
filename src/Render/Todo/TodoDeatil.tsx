import React from "react";
import { useState, useEffect } from "react";
import "./TodoDetail.css";

export default function Try(props: {
  id: number;
  detailState: boolean;
}): JSX.Element {
  console.log(props);
  console.log(props.detailState);
  interface detail {
    id: number;
    id2: number;
    text: string;
  }

  let parsedDetails: detail[] = JSON.parse(
    localStorage.getItem("details") as string
  );

  console.log(parsedDetails);

  const [change, setChange] = useState("");
  const [details, setDetails] = useState<detail[]>(parsedDetails);

  //textarea 관리하기 위한 useState
  const [show, setShow] = useState(false);

  //detail List 관리하기 위한 useState
  const [detailShow, setDetailShow] = useState(false);

  let filter = details.filter((a) => a.id === props.id);

  localStorage.setItem("details", JSON.stringify(details));

  useEffect(() => {
    if (filter.length !== 0) setDetailShow(true);
    else setDetailShow(false);
  }, [filter]);

  console.log(filter);
  console.log(detailShow);
  return (
    <div className="todos-detail">
      {props.detailState ? (
        <>
          <input
            readOnly
            placeholder="Write Details"
            className="detail-context"
            onClick={() => {
              setShow(true);
            }}
          ></input>
          {show ? (
            <div className="detail-textarea">
              <form>
                <textarea
                  cols={30}
                  rows={10}
                  value={change}
                  onChange={(e) => {
                    setChange(e.target.value);
                  }}
                ></textarea>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (change === "") {
                      alert("세부사항을 적어주세요");
                    } else {
                      setDetails([
                        ...details,
                        { id: props.id, id2: Date.now(), text: change },
                      ]);
                      setChange("");
                      setShow(false);
                    }
                  }}
                >
                  저장
                </button>
                <button
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  닫기
                </button>
              </form>
            </div>
          ) : null}

          {show ? null : (
            <>
              {detailShow ? (
                <div className="detail-list">
                  <>
                    {filter.map((a) => (
                      <div className="detail-flexbox">
                        <div>{a.text}</div>
                        <div
                          onClick={() => {
                            console.log(a);
                            let filteredDetails = details.filter(
                              (b) => b.id2 !== a.id2
                            );
                            setDetails(filteredDetails);
                          }}
                        >
                          ❌
                        </div>
                      </div>
                    ))}
                  </>
                </div>
              ) : null}
            </>
          )}
        </>
      ) : null}
    </div>
  );
}
