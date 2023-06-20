import { Paragraph, VirtualList, YStack } from '@t4/ui'
import React from 'react'
import { SolitoImage } from 'solito/image'

export function InfiniteListScreen() {
  return <VirtualList data={data} renderItem={Item} itemHeight={80} />
}

interface Item {
  title: string
  index: number
}

const data: Item[] = Array(100)
  .fill(0)
  .map((_, v) => ({ title: `Item ${v + 1}`, index: v }))

function Item(item: Item) {
  return (
    <YStack style={{ paddingLeft: 8, flexDirection: 'row' }}>
      <SolitoImage
        src="/t4-logo.png"
        width={56}
        height={56}
        alt="T4 Logo"
        style={{
          marginTop: 8,
        }}
      />
      <YStack>
        <Paragraph
          style={{
            paddingTop: 8,
            paddingLeft: 16,
            paddingBottom: 4,
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          {'Item ' + item.index}
        </Paragraph>
        <Paragraph
          style={{
            paddingLeft: 16,
            fontSize: 16,
            opacity: 0.6,
          }}
        >
          Subtitle
        </Paragraph>
      </YStack>
    </YStack>
  )
}
