import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native'
import { useVirtualizer } from '@tanstack/react-virtual'
import React from 'react'

interface ListProps {
  data: any[]
  renderItem: (item: any) => JSX.Element
  itemHeight: number
}

export function VirtualList({ data, renderItem, itemHeight }: ListProps) {
  const { top, bottom } = useSafeAreaInsets()
  const scheme = useColorScheme()
  const isLight = scheme === 'light'

  const parentRef = React.useRef()
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current as any,
    estimateSize: () => itemHeight,
  })

  return (
    <div
      ref={parentRef as any}
      style={{
        backgroundColor: !isLight ? '#000' : '#fff',
        paddingTop: top,
        paddingBottom: bottom,
        height: `100%`,
        overflow: 'auto', // Make it scroll!
      }}
    >
      {/* The large inner element to hold all of the items */}
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Only the visible items in the virtualizer, manually positioned to be in view */}
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(virtualItem)}
          </div>
        ))}
      </div>
    </div>
  )
}
