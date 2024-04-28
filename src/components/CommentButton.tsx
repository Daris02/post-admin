import {Button, Link, useRecordContext} from "react-admin";

export default function CommentButton() {
    const record = useRecordContext();
    return (
        <Button
            component={Link}
            to={`/posts/${record.id}/comments`}
            color="primary"
        >
            Comments
        </Button>
    );
}
