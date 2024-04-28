import { Datagrid, List, TextField } from "react-admin";

export default function PostList(): JSX.Element {
    return (
        <List>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="userId"/>
            </Datagrid>
        </List>
    );
};
