// ===============================================================================
// DATA
// ===============================================================================

var friendsArray = [
  {
    name: "Luanne Hill",
    photo:
      "https://vignette.wikia.nocookie.net/p__/images/d/da/Luanne_Platter_-%29.jpg/revision/latest?cb=20140429033223&path-prefix=protagonist",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Bobby Hill",
    photo:
      "https://imgix.ranker.com/user_node_img/50091/1001810212/original/he-admitted-finding-certain-men-attractive-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
    scores: [5, 4, 2, 1, 2, 1, 3, 5, 3, 3]
  },
  {
    name: "Hank Hill",
    photo:
      "https://pbs.twimg.com/profile_images/1718704537/hank-hill_400x400.jpeg",
    scores: [5, 5, 4, 4, 5, 3, 3, 5, 4, 5]
  },
  {
    name: "Peggy Hill",
    photo:
      "https://i.pinimg.com/originals/aa/28/ae/aa28ae1f0f54b1b4a4abdc60684dc31f.jpg",
    scores: [2, 1, 3, 4, 1, 5, 4, 1, 3, 5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
