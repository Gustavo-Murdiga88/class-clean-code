// Nomenclatura de variáveis

const categoryOfUserOnGithub = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserFromGithub(req, res) {
  const githubUserName = String(req.query.username)

  if (!githubUserName) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    })
  }

  const userFromGithub = await fetch(`https://api.github.com/users/${githubUserName}`);

  if (userFromGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${userFromGithub}" not found`
    })
  }

  const user = await userFromGithub.json()

  const categoryOfUserOnGithubOrdered = categoryOfUserOnGithub.sort((categoryA, categoryB) => categoryB.followers - categoryA.followers);

  const categoryWhereUserIs = categoryOfUserOnGithubOrdered.find(category => user.followers > category.followers)


  return {
    user,
    category: categoryWhereUserIs?.title
  }
}

getUserFromGithub({
  query: {
    username: 'josepholiveira'
  }
}, {})