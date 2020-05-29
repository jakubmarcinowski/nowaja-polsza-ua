import React, { useEffect, useRef } from 'react'
import { useSlate } from 'slate-react'
import { Editor, Range, Transforms } from 'slate'
import { Toolbar, Slider } from 'components'
import { ToolbarButtonContainer } from 'containers'
import { isMarkActive, toggleMark, findBlockMatch } from 'utils/editor'
import { blockButtons, inlineButtons } from 'utils/button-types'
import './InlineToolbar.scss'

const inlineToolbarButtons = [
  inlineButtons.BOLD,
  inlineButtons.ITALIC,
  inlineButtons.UNDERLINE,
]

const InlineToolbar = () => {
  const ref = useRef()
  const editor = useSlate()
  const { selection } = editor
  const imageElement = findBlockMatch(editor, { format: 'images' })

  useEffect(() => {
    const el = ref.current

    if (!el) {
      return
    }

    if (
      !selection ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style')
      return
    }

    el.style.opacity = 1
    if (imageElement) {
      el.style.top = '100px'
      el.style.left = `calc(50% - ${el.offsetWidth / 2}px)`
    } else {
      const domSelection = window.getSelection()
      const domRange = domSelection.getRangeAt(0)
      const rect = domRange.getBoundingClientRect()
      el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`
      el.style.left = `${rect.left +
        window.pageXOffset -
        el.offsetWidth / 2 +
        rect.width / 2}px`
    }
  }, [selection])

  if (imageElement) {
    const isFloatActive = !!imageElement[0].float
    const imgMaxWidth = imageElement[0].maxWidth
    return (
      <Toolbar ref={ref} className={'inline-toolbar'}>
        <ToolbarButtonContainer
          isActiveChecker={() => isFloatActive}
          onToggle={() => {
            Transforms.setNodes(
              editor,
              { float: isFloatActive ? undefined : 'left', maxWidth: null },
              { at: imageElement[1] }
            )
          }}
          {...blockButtons.ALIGN_LEFT}
          tooltip="Wyrównaj zdjęcie do lewej"
        />
        {!isFloatActive && (
          <Slider
            label="Maksymalna szerokość"
            onChange={(event, value) => {
              event.preventDefault()
              Transforms.setNodes(
                editor,
                { float: undefined, maxWidth: value },
                { at: imageElement[1] }
              )
            }}
            min={300}
            max={1440}
            step={20}
            value={imgMaxWidth || 992}
            valueLabelDisplay="auto"
          />
        )}
      </Toolbar>
    )
  }

  return (
    <Toolbar ref={ref} className={'inline-toolbar'}>
      {inlineToolbarButtons.map(props => (
        <ToolbarButtonContainer
          key={props.value}
          isActiveChecker={isMarkActive}
          onToggle={toggleMark}
          {...props}
        />
      ))}
    </Toolbar>
  )
}

export default InlineToolbar
