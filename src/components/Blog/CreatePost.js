import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";

import { GET_POST_CAT_QUERY, CREATE_POST_MUTATION } from "../../queries";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = (event) => {
    console.log("hello");
  };

  // const handleSubmit = async (event, createPost) => {
  //   event.preventDefault();
  //   setSubmitting(true);
  //   createPost({ variables: { title, content, thumb: uploadUrl, category } });
  // };

  return (
    <div className="container">
      <h3 className="text-center pt-2 my-0">Add A New Post</h3>
      <Mutation mutation={CREATE_POST_MUTATION}>
        {(createPost, { loading, error }) => {
          if (error) return <div>error!!!</div>;
          return (
            <form className="p-3">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Title"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
              </div>
              <div className="form-row my-2">
                <div className="col">
                  <textarea
                    type="text"
                    className="form-control"
                    rows="5"
                    onChange={(event) => setContent(event.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="form-row my-2">
                <div className="col">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      onChange={handleImageChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose file
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="category">Select Category</label>

                <Query query={GET_POST_CAT_QUERY}>
                  {({ data, loading, error }) => {
                    if (loading) return <option disabled>loading...</option>;
                    if (error) return <option disabled>error!!</option>;

                    return (
                      <select
                        className="form-control"
                        id="category"
                        onChange={(event) => setCategory(event.target.value)}
                      >
                        {data.postCats.map((postCat) => (
                          <option key={postCat.id}>{postCat.catTitle}</option>
                        ))}
                      </select>
                    );
                  }}
                </Query>
              </div>

              <div className="form-row my-2">
                <div className="col">
                  <button className="btn btn-primary btn-block">Post</button>
                </div>
              </div>
            </form>
          );
        }}
      </Mutation>
    </div>
  );
};

export default CreatePost;
