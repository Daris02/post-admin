import {Datagrid, FunctionField, List, TextField, useRecordContext} from "react-admin";
import CommentButton from "./CommentButton";

export default function PostList(): JSX.Element {
    return (
        <List>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title"/>
                <FunctionField
                    source="userId"
                    label="User name"
                    render={User}
                />
                <CommentButton />
            </Datagrid>
        </List>
    );
};

const User = () => {
    const record = useRecordContext();
    if (!record) return null;
    return <>{record.name}</>;
};

