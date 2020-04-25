import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import axios from "axios";

import {
  GET_POST_CAT_QUERY,
  CREATE_POST_MUTATION,
  GET_POSTS_QUERY,
} from "../../queries";

import withAuth from "../withAuth";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleImage = (event) => {
    const selectedFile = event.target.files[0];
    const fileSizeLimit = 10000000; // 4mb
    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setFileError(`${selectedFile.name}: is larger than 4mb`);
    } else {
      setFile(selectedFile);
      setFileError("");
    }
  };

  const handleImageUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "pyrexmusic");
      data.append("cloud_name", "neupytech");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/neupytech/raw/upload/",
        data
      );
      return res.data.url;
    } catch (error) {
      console.error("Error uploading file", error);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, createPost) => {
    event.preventDefault();
    setSubmitting(true);
    const uploadUrl = await handleImageUpload();
    createPost({ variables: { title, content, thumb: uploadUrl, category } });
  };

  const handleUpdateCache = (cache, { data: { createPost } }) => {
    const data = cache.readQuery({ query: GET_POSTS_QUERY });
    const posts = data.posts.concat(createPost.post);
    cache.writeQuery({ query: GET_POSTS_QUERY, data: { posts } });
  };

  return (
    <div className="container">
      <h3 className="text-center pt-2 my-0">Add A New Post</h3>
      <Mutation
        mutation={CREATE_POST_MUTATION}
        onCompleted={(data) => {
          setSubmitting(false);
          setTitle("");
          setContent("");
          setFile("");
        }}
        update={handleUpdateCache}
      >
        {(createPost, { loading, error }) => {
          if (error) return <div>error!!!</div>;
          return (
            <form
              className="p-3"
              onSubmit={(event) => handleSubmit(event, createPost)}
            >
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Title"
                    value={title}
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
                    value={content}
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
                      onChange={handleImage}
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

export default withAuth()(CreatePost);
