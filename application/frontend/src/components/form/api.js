export const getComments = async () => {
    return [
        {
            id: "1",
            body: "Looks awesome",
            username: "Jack",
            userId: "1",
            parentId: null,
            createdAt: "2021-10-15T23:00:33.010+02:00",
        },
        {
            id: "2",
            body: "cool, cool, cool, cool",
            username: "John",
            userId: "2",
            parentId: null,
            createdAt: "2021-10-16T23:10:33.010+02:00",
        },
        {
            id: "3",
            body: "win big money, win, win, win",
            username: "Rose",
            userId: "2",
            parentId: "1",
            createdAt: "2021-10-16T23:00:33.010+02:00",
        },
        {
            id: "4",
            body: "Second comment`s child here, reply, lol post, dota2 video, lol, it is a long comment what long comment look like",
            username: "Kite",
            userId: "2",
            parentId: "2",
            createdAt: "2021-10-17T23:00:33.010+02:00",
        },
    ];
};

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "NewUser",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};