import React, { Fragment } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const CreatePost = () => {
  return (
    <div className="card">
      <h3 className="text-center pt-2 my-0">Add A New Post</h3>
      <form className="p-3">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Post Title"
            />
          </div>
        </div>
        <div className="form-row my-2">
          <div className="col">
            <textarea type="text" className="form-control" rows="5"></textarea>
          </div>
        </div>
        <div className="form-row my-2">
          <div className="col">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="category">Select Category</label>
          <select className="form-control" id="category">
            <Query query={GET_POST_CAT_QUERY}>
              {({ data, loading, error }) => {
                if (loading) return <option disabled>loading...</option>;
                if (error) return <option disabled>error!!</option>;

                return (
                  <Fragment>
                    {data.postCats.map(postCat => (
                      <option key={postCat.id}>{postCat.catTitle}</option>
                    ))}
                  </Fragment>
                );
              }}
            </Query>
          </select>
        </div>

        <div className="form-row my-2">
          <div className="col">
            <button className="btn btn-primary">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

const GET_POST_CAT_QUERY = gql`
  query PostsCatQuery {
    postCats {
      id
      catDesc
      catTitle
    }
  }
`;
