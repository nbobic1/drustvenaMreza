//index mora biti u svim zbog reorder
export type PostElement = (TextElement | VideoElement | ImageElement | TextQElement | YesNoQElement);
export enum PostElementType {
  VideoElement,
  ImageElement,
  TextQElement,
  YesNoQElement,
  TextElement,
}
export type PostData = {
  id: number;
  text: string;
  imgSrc: string;
  items: PostElement[];
};
export type VideoElement = {
  index: number;
  url: string;
  type: PostElementType.VideoElement;
};
export type ImageElement = {
  index: number;
  url: string;
  type: PostElementType.ImageElement;
};
export type YesNoQElement = {
  index: number;
  question: string;
  answer: boolean;
  style: any;
  type: PostElementType.YesNoQElement;
};
export type TextQElement = {
  type: PostElementType.TextQElement;
  index: number;
  question: string;
  style: any;
  answer: string;
}
export type TextElement = {
  type: PostElementType.TextElement;
  index: number;
  style: any;
  text: string;
}

