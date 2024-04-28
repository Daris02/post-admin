import { Datagrid, List, RichTextField, TextField} from "react-admin";

export default function CommentList() {
    return (
        <List>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="name"/>
                <RichTextField source="body"/>
                <TextField source="email"/>
            </Datagrid>
        </List>
    );
}
