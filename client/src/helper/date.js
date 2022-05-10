import moment from "moment";

const setPostDateFormat = (postCreatedAt) => {
  return moment().diff(moment(postCreatedAt), "hours") >= 24
    ? moment(postCreatedAt).format("MMM Do YY")
    : moment(postCreatedAt).fromNow();
};

export default setPostDateFormat;
