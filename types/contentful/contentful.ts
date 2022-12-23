// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IHeadingFields {
  /** Entry Name */
  entryName?: string | undefined;

  /** title */
  title?: string | undefined;
}

export interface IHeading extends Entry<IHeadingFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "heading";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHomeLandingPageFields {
  /** Entry Name */
  entryName: string;

  /** slug */
  slug?: string | undefined;

  /** blocks */
  blocks?: IHeading[] | undefined;
}

export interface IHomeLandingPage extends Entry<IHomeLandingPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "homeLandingPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "heading" | "homeLandingPage";

export type IEntry = IHeading | IHomeLandingPage;

export type LOCALE_CODE = "en" | "fi";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "fi";