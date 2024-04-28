import { Datagrid, List, RichTextField, TextField } from "react-admin";
import { useParams } from 'react-router-dom';

export default function CommentList() {

    const { postId } = useParams();
    return (
        <List resource="comments" filter={{ postId }}>
            <Datagrid rowClick="edit">
                <TextField source="name"/>
                <RichTextField source="body"/>
                <TextField source="email"/>
            </Datagrid>
        </List>
    );
}
