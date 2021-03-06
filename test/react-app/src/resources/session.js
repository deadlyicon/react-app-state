import { createResource } from 'react-app-state'
import wait from '../lib/wait'
import { setLocation } from './location'
export const { getState, setState, useState } = createResource()

export async function login(){
  if (getState().loggingIn) return
  setState({ loggingIn: true })
  await wait(1000)
  const username = `user${Math.random()}`
  setState({
    loggingIn: undefined,
    username,
    sessionKey: `${Math.random()}`,
  })
  await setLocation(`/user/${username}`)
}

export async function logout(){
  console.trace('WTF logged out?')
  setState({
    username: undefined,
    sessionKey: undefined,
  })
  await setLocation(`/`)
}

export function useCurrentUser(){
  const {username, loggingIn} = useState(
    ['username', 'loggingIn']
  )
  return {
    loggingIn,
    loggedIn: !!username,
    username,
  }
}
