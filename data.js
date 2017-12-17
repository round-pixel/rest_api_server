module.exports = {
  posts: [
    {
      id: 1,
      image: {
        src: '/dist/images/summer.jpg',
        alt: 'Some text'
      },
      message: 'Summer days',
      metaInfo: {
        createdAt: new Date(2017, 0, 1, 2, 3, 4),
        createdBy: 'Mary',
        updatedAt: new Date(2017, 0, 4, 3, 2, 1)
      },
      likes: 2
    },
    {
      id: 2,
      image: {
        src: '/dist/images/river.jpg'
      },
      message: 'The long river',
      metaInfo: {
        updatedAt: new Date(2017, 0, 1, 2, 3, 4)
      },
      likes: 0
    },
    {
      id: 3,
      image: {
        src: '/dist/images/mountains.jpg'
      },
      message: 'Great mountains of australia',
      metaInfo: {
        createdAt: new Date(2017, 0, 5, 6, 7, 8),
        createdBy: 'Mike',
        updatedAt: new Date(2017, 0, 1, 2, 3, 4)
      },
      likes: 10
    },
    {
      id: 4,
      image: {
        src: '/dist/images/summer.jpg',
        alt: 'Some text'
      },
      message: 'Summer days.',
      metaInfo: {
        createdAt: new Date(2017, 0, 1, 2, 3, 4),
        createdBy: 'Mary',
        updatedAt: new Date(2017, 0, 4, 3, 2, 1)
      },
      likes: 2
    },
    // {
    //   id: 5,
    //   image: {
    //     src: '/dist/images/river.jpg'
    //   },
    //   message: 'The long river.',
    //   metaInfo: {
    //     updatedAt: new Date(2017, 0, 1, 2, 3, 4)
    //   }
    // },
    // {
    //   id: 6,
    //   image: {
    //     src: '/dist/images/mountains.jpg'
    //   },
    //   message: 'Great mountains of australia.',
    //   metaInfo: {
    //     createdAt: new Date(2017, 0, 5, 6, 7, 8),
    //     createdBy: 'Mike',
    //     updatedAt: new Date(2017, 0, 1, 2, 3, 4)
    //   },
    //   likes: 10
    // },
    // {
    //   id: 7,
    //   image: {
    //     src: '/dist/images/summer.jpg',
    //     alt: 'Some text'
    //   },
    //   message: 'Summer days..',
    //   metaInfo: {
    //     createdAt: new Date(2017, 0, 1, 2, 3, 4),
    //     createdBy: 'Mary',
    //     updatedAt: new Date(2017, 0, 4, 3, 2, 1)
    //   },
    //   likes: 2
    // },
    // {
    //   id: 8,
    //   image: {
    //     src: '/dist/images/river.jpg'
    //   },
    //   message: 'The long river..',
    //   metaInfo: {
    //     updatedAt: new Date(2017, 0, 1, 2, 3, 4)
    //   }
    // },
    // {
    //   id: 9,
    //   image: {
    //     src: '/dist/images/mountains.jpg'
    //   },
    //   message: 'Great mountains of australia..',
    //   metaInfo: {
    //     createdAt: new Date(2017, 0, 5, 6, 7, 8),
    //     createdBy: 'Mike',
    //     updatedAt: new Date(2017, 0, 1, 2, 3, 4)
    //   },
    //   likes: 10
    // }
  ]
};
