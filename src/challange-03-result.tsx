// Causa vs Efeito

// @ts-nocheck

import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUserFromGithub() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function getUserFromGithub() {
      setIsLoading(true)

      const userFromFetch = fetchUserFromGithub()

      setUserData(userFromFetch.data.user)

      setIsLoading(false)
    }

    getUserFromGithub()
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}