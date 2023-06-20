import { createTRPCNext } from '@trpc/next'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@t4/api/src/router'

let token = ''

export function setToken(newToken: string) {
  token = newToken
}

const getBaseUrl = () => {
  return `${process.env.NEXT_PUBLIC_API_URL}`
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          async headers() {
            return {
              Authorization: token ?? undefined,
            }
          },
          url: `${getBaseUrl()}/trpc`,
        }),
      ],
    }
  },
  ssr: false,
})

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>
