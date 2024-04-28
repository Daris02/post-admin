import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import PostList from "./components/PostList";
import CommentList from "./components/CommentList";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      recordRepresentation="name"
    />
    <Resource
      name="comments"
      list={CommentList}
      recordRepresentation="name"
    />
  </Admin>
);
