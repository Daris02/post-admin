import {
    Admin,
    Resource,
    EditGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { Route } from "react-router-dom";
import PostList from "./components/PostList";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={EditGuesser}
      recordRepresentation="name"
    >
        {/*<Route path=":userId/name" />*/}
    </Resource>
  </Admin>
);
