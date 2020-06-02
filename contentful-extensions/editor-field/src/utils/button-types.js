import {
  BoldButton,
  UnderlineButton,
  ItalicButton,
  UnorderedListButton,
  OrderedListButton,
  AlignLeftButton,
  AlignRightButton,
  ImagesButton,
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
  StatementButton,
} from 'components'
import { findBlockMatch } from 'utils/editor'

export const inlineButtons = {
  BOLD: {
    value: 'bold',
    Component: BoldButton,
    tooltip: 'Pogrubienie [Ctrl + B]',
  },
  ITALIC: {
    value: 'italic',
    Component: ItalicButton,
    tooltip: 'Kursywa [Ctrl + U]',
  },
  UNDERLINE: {
    value: 'underline',
    Component: UnderlineButton,
    tooltip: 'Podkreślenie [Ctrl + U]',
  },
  LINK: {
    value: 'link',
    Component: LinkButton,
    dialog: {
      title: 'URL',
    },
    tooltip: 'Wstaw link',
  },
  YOUTUBE: {
    value: 'youtube',
    Component: YoutubeButton,
    dialog: {
      title: 'Youtube - ID',
      label: 'np. www.youtube.com/watch?v=TvUnCBGrQ9M -> TvUnCBGrQ9M',
    },
    tooltip: 'Wstaw Youtube',
  },
  SOUNDCLOUD: {
    value: 'soundcloud',
    Component: SoundCloudButton,
    dialog: {
      title: 'Soundcloud - ID',
      label:
        'np. soundcloud.com/kyler-smith1/sets/sleep -> kyler-smith1/sets/sleep',
    },
    tooltip: 'Wstaw Soundcloud',
  },
  FOOTNOTE: {
    value: 'footnote',
    Component: FootnoteButton,
    dialog: {
      title: 'Przypis',
      label: 'Wstaw przypis',
      getInitValue: editor => {
        const match = findBlockMatch(editor, { format: 'footnote' })
        return match ? match[0].content : ''
      },
    },
    tooltip: 'Przypis',
  },
  IMAGES: {
    value: 'images',
    Component: ImagesButton,
    dialog: {
      title: 'IMG - URL',
      label: '',
      mapData: dialogValue => ({ url: dialogValue }),
    },
    tooltip: 'Wstaw zdjęcie',
  },
}

export const blockButtons = {
  UNORDERED_LIST: {
    value: 'unordered-list',
    Component: UnorderedListButton,
    tooltip: 'Nienumerowana lista',
  },
  ORDERED_LIST: {
    value: 'ordered-list',
    Component: OrderedListButton,
    tooltip: 'Numerowana lista',
  },
  ALIGN_LEFT: {
    value: 'align-left',
    Component: AlignLeftButton,
    tooltip: 'Wyrównaj do lewej',
  },
  ALIGN_CENTER: {
    value: 'align-center',
    Component: AlignCenterButton,
    tooltip: 'Wyrównaj do środka',
  },
  ALIGN_RIGHT: {
    value: 'align-right',
    Component: AlignRightButton,
    tooltip: 'Wyrównaj do prawej',
  },
  ALIGN_JUSTIFY: {
    value: 'align-justify',
    Component: AlignJustifyButton,
    tooltip: 'Wyjustuj',
  },

  BLOCKQUOTE: {
    value: 'block-quote',
    Component: QuoteButton,
    tooltip: 'Wstaw cytat',
  },
  HEADING_ONE: {
    value: 'heading-one',
    Component: HeadingButton,
    headingType: 1,
    tooltip: 'Nagłówek 1',
  },
  HEADING_TWO: {
    value: 'heading-two',
    Component: HeadingButton,
    headingType: 2,
    tooltip: 'Nagłówek 2',
  },
  HEADING_THREE: {
    value: 'heading-three',
    Component: HeadingButton,
    headingType: 3,
    tooltip: 'Nagłówek 3',
  },
  COLUMNS: {
    value: 'columns',
    Component: ColumnsButton,
    children: [
      { type: 'column', children: [{ text: 'Pierwsza kolumna' }] },
      { type: 'column', children: [{ text: 'Druga kolumna' }] },
    ],
    tooltip: 'Podział na dwie kolumny',
  },
  STATEMENT: {
    value: 'statement',
    Component: StatementButton,
    dialog: {
      title: 'IMG - URL',
      label: '',
      mapData: dialogValue => ({ props: { url: dialogValue } }),
    },
    tooltip: 'Wstaw wypowiedź',
    isActiveChecker: () => false,
  },
}

export const fullscreenButton = isFullscreen => ({
  value: isFullscreen ? 'exit-fullscreen' : 'fullscreen',
  Component: isFullscreen ? ExitFullscreenButton : FullscreenButton,
  tooltip: isFullscreen ? 'Wyłącz pełny ekran' : 'Pełny ekran',
})
