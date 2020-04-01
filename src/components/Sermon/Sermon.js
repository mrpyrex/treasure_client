import React, { Fragment } from "react";
import AudioPlayer from "./AudioPlayer";
import Moment from "react-moment";

const Sermon = ({ sermons }) => {
  return (
    <Fragment>
      {sermons.map(sermon => (
        <div className="col-md-4 my-2">
          <div className="card" key={sermon.id}>
            <div className="card-body">
              <h3 className="card-title">{sermon.title}</h3>
              <p>
                {sermon.description.length > 121
                  ? sermon.description.substring(0, 120) + "..."
                  : sermon.description}
              </p>
              <AudioPlayer url={sermon.url} />
              <p>
                By {sermon.createdBy} -{" "}
                <Moment format="LL">{sermon.createdAt}</Moment>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Sermon;
