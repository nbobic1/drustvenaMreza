//index mora biti u svim zbog reorder
export type PostElement = (VideoElement | ImageElement | TextQElement | YesNoQElement);
export enum PostElementType {
VideoElement,
ImageElement,
TextQElement,
YesNoQElement
}
export type PostData ={
  index: number;
  text: string;
  imgSrc: string;
 items: PostElement[];
};
export type VideoElement ={
  index: number;
  url: string;
  type:PostElementType.VideoElement;
};
export type ImageElement= {
  index: number;
  url: string;
  type:PostElementType.ImageElement;
};
export type YesNoQElement ={
  index: number;
  question: string;
  answer: boolean;
  type:PostElementType.YesNoQElement;
};
export type TextQElement={
  type:PostElementType.TextQElement;
  index: number;
  question: string;
  answer: string;
}

