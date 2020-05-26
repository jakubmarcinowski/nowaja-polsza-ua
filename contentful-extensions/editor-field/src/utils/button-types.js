import {
  BoldButton,
  UnderlineButton,
  ItalicButton,
  UnorderedListButton,
  OrderedListButton,
  AlignLeftButton,
  AlignRightButton,
  AlignCenterButton,
  HeadingButton,
  AlignJustifyButton,
  QuoteButton,
  YoutubeButton,
  SoundCloudButton,
  FootnoteButton,
  ColumnsButton,
  LinkButton,
  FullscreenButton,
  ExitFullscreenButton,
} from 'components'
import { findBlockMatch } from 'utils/editor'

export const inlineButtons = {
  BOLD: { value: 'bold', Component: BoldButton },
  ITALIC: { value: 'italic', Component: ItalicButton },
  UNDERLINE: { value: 'underline', Component: UnderlineButton },
  LINK: {
    value: 'link',
    Component: LinkButton,
  },
  YOUTUBE: {
    value: 'youtube',
    Component: YoutubeButton,
    dialog: {
      title: 'Youtube',
      label: 'youtube-id',
    },
  },
  SOUNDCLOUD: {
    value: 'soundcloud',
    Component: SoundCloudButton,
    dialog: {
      title: 'Soundcloud',
      label: 'soundcloud-id',
    },
  },
  FOOTNOTE: {
    value: 'footnote',
    Component: FootnoteButton,
    dialog: {
      title: 'Przypis',
      label: 'Przypis',
      getInitValue: editor => {
        const match = findBlockMatch(editor, { format: 'footnote' })
        return match ? match[0].content : ''
      },
    },
  },
}

export const blockButtons = {
  UNORDERED_LIST: { value: 'unordered-list', Component: UnorderedListButton },
  ORDERED_LIST: { value: 'ordered-list', Component: OrderedListButton },
  ALIGN_LEFT: {
    value: 'align-left',
    Component: AlignLeftButton,
  },
  ALIGN_CENTER: {
    value: 'align-center',
    Component: AlignCenterButton,
  },
  ALIGN_RIGHT: {
    value: 'align-right',
    Component: AlignRightButton,
  },
  ALIGN_JUSTIFY: {
    value: 'align-justify',
    Component: AlignJustifyButton,
  },
  BLOCKQUOTE: {
    value: 'block-quote',
    Component: QuoteButton,
  },
  HEADING_ONE: {
    value: 'heading-one',
    Component: HeadingButton,
    headingType: 1,
  },
  HEADING_TWO: {
    value: 'heading-two',
    Component: HeadingButton,
    headingType: 2,
  },
  HEADING_THREE: {
    value: 'heading-three',
    Component: HeadingButton,
    headingType: 3,
  },
  COLUMNS: {
    value: 'columns',
    Component: ColumnsButton,
    children: [
      { type: 'column', children: [{ text: 'Pierwsza' }] },
      { type: 'column', children: [{ text: 'Druga' }] },
    ],
  },
}

export const fullscreenButton = isFullscreen => ({
  value: isFullscreen ? 'exit-fullscreen' : 'fullscreen',
  Component: isFullscreen ? ExitFullscreenButton : FullscreenButton,
})
