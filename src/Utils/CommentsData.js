const CommentsData = [
  {
    id: 0,
    userName: "Test User 1",
    comment: "Dummy Comment 1",
    reply: [
      {
        id: 1.1,
        userName: "Test User 1.1",
        comment: "Dummy Comment 1.1",
      },
      {
        id: 1.2,
        userName: "Test User 1.2",
        comment: "Dummy Comment 1.2",
        reply: [
          {
            id: 1.21,
            userName: "Test User 1.21",
            comment: "Dummy Comment 1.21",
          },
          {
            id: 1.22,
            userName: "Test User 1.22",
            comment: "Dummy Comment 1.22",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    userName: "Test User 2",
    comment: "Dummy Comment 2",
    reply: [
      {
        id: 2.1,
        userName: "Test User 2.1",
        comment: "Dummy Comment 2.1",
      },
      {
        id: 2.2,
        userName: "Test User 2.2",
        comment: "Dummy Comment 2.2",
        reply: [
          {
            id: 2.21,
            userName: "Test User 2.21",
            comment: "Dummy Comment 2.21",
          },
          {
            id: 2.22,
            userName: "Test User 2.22",
            comment: "Dummy Comment 2.22",
          },
        ],
      },
    ],
  },
];

export default CommentsData;
