import React from "react";
import './style/App.css'
import { CommentDetail } from "./CommentDetail";
import { ApprovalCard } from "./ApprovalCard";
import { createRoot } from "react-dom/client";
import { faker } from "@faker-js/faker";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatarImg={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 2:15PM"
                    commentText="Nice Blog Post, Bro"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatarImg={faker.image.avatar()}
                    author="John"
                    timeAgo="Today at 4:34PM"
                    commentText="IKR"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatarImg={faker.image.avatar()}
                    author="Alex"
                    timeAgo="Yesterday at 6:09PM"
                    commentText="FIRST"
                />
            </ApprovalCard>
        </div>
    );
};

root.render(<App />);
