import { Button, H1, ScrollView, XStack, YStack } from '@shichida/ui'
import React from 'react'
import { useLink } from 'solito/link'
import { SignedIn, SignedOut, useAuth } from '../../utils/clerk'

export function HomeScreen() {
  const { signOut } = useAuth()

  const signInLink = useLink({
    href: '/sign-in',
  })

  const signUpLink = useLink({
    href: '/sign-up',
  })

  return (
    <ScrollView>
      <YStack f={1} jc="center" ai="center" p="$4" space="$4">
        <H1 textAlign="center">Home Screen</H1>

        <SignedIn>
          <Button
            onPress={() => {
              signOut()
            }}
            space="$2"
          >
            Sign Out
          </Button>
        </SignedIn>
        <SignedOut>
          <XStack space="$2">
            <Button {...signInLink} space="$2">
              Sign In
            </Button>
            <Button {...signUpLink} space="$2">
              Sign Up
            </Button>
          </XStack>
        </SignedOut>
      </YStack>
    </ScrollView>
  )
}
