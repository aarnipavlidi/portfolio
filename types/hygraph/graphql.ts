/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

export enum AnchorTarget {
  Blank = 'blank',
  Self = 'self'
}

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  fileName: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: InputMaybe<AssetCreateLocalizationsInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  fileName: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<AssetWhereStageInput>;
  documentInStages_none: InputMaybe<AssetWhereStageInput>;
  documentInStages_some: InputMaybe<AssetWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  upload: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document: InputMaybe<DocumentTransformationInput>;
  image: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations: InputMaybe<AssetUpdateLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<AssetWhereStageInput>;
  documentInStages_none: InputMaybe<AssetWhereStageInput>;
  documentInStages_some: InputMaybe<AssetWhereStageInput>;
  fileName: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  size: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  upload: InputMaybe<AssetUploadWhereInput>;
  width: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex: InputMaybe<Scalars['Hex']['input']>;
  rgba: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  LandingPage = 'LandingPage',
  /** This component is being used, when we want to show different icons with related name or without. It's also possibe to show only related value (name), which is determined based on which boolean option (Show Icon) has been chosen. */
  NameIcon = 'NameIcon',
  Navigation = 'Navigation',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

/** Choose which icon you want to use. */
export enum Icon {
  GitHub = 'GitHub',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Graphql = 'graphql',
  Nextjs = 'nextjs',
  React = 'react',
  Tailwindcss = 'tailwindcss'
}

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen: InputMaybe<ImageSharpenInput>;
};

export type LandingPage = Entity & Node & {
  __typename?: 'LandingPage';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  destination: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<LandingPage>;
  /** List of LandingPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  navigation: Maybe<Navigation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** This field will determine, what kind of url the landing page will be shown for the user. */
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type LandingPageCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type LandingPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type LandingPageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


export type LandingPageNavigationArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type LandingPagePublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type LandingPageScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type LandingPageUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type LandingPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LandingPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type LandingPageConnection = {
  __typename?: 'LandingPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LandingPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LandingPageCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  destination: Scalars['String']['input'];
  navigation: InputMaybe<NavigationCreateOneInlineInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingPageCreateManyInlineInput = {
  /** Connect multiple existing LandingPage documents */
  connect: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Create and connect multiple existing LandingPage documents */
  create: InputMaybe<Array<LandingPageCreateInput>>;
};

export type LandingPageCreateOneInlineInput = {
  /** Connect one existing LandingPage document */
  connect: InputMaybe<LandingPageWhereUniqueInput>;
  /** Create and connect one LandingPage document */
  create: InputMaybe<LandingPageCreateInput>;
};

/** An edge in a connection. */
export type LandingPageEdge = {
  __typename?: 'LandingPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LandingPage;
};

/** Identifies documents */
export type LandingPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<LandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  destination: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  destination_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  destination_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  destination_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  destination_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  destination_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  destination_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  destination_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  destination_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  destination_starts_with: InputMaybe<Scalars['String']['input']>;
  documentInStages_every: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_none: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_some: InputMaybe<LandingPageWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  navigation: InputMaybe<NavigationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum LandingPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DestinationAsc = 'destination_ASC',
  DestinationDesc = 'destination_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LandingPageUpdateInput = {
  destination: InputMaybe<Scalars['String']['input']>;
  navigation: InputMaybe<NavigationUpdateOneInlineInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyInlineInput = {
  /** Connect multiple existing LandingPage documents */
  connect: InputMaybe<Array<LandingPageConnectInput>>;
  /** Create and connect multiple LandingPage documents */
  create: InputMaybe<Array<LandingPageCreateInput>>;
  /** Delete multiple LandingPage documents */
  delete: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Disconnect multiple LandingPage documents */
  disconnect: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LandingPage documents */
  set: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Update multiple LandingPage documents */
  update: InputMaybe<Array<LandingPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LandingPage documents */
  upsert: InputMaybe<Array<LandingPageUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPageUpdateManyInput = {
  /** No fields in updateMany data input */
  _: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LandingPageUpdateManyInput;
  /** Document search */
  where: LandingPageWhereInput;
};

export type LandingPageUpdateOneInlineInput = {
  /** Connect existing LandingPage document */
  connect: InputMaybe<LandingPageWhereUniqueInput>;
  /** Create and connect one LandingPage document */
  create: InputMaybe<LandingPageCreateInput>;
  /** Delete currently connected LandingPage document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LandingPage document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPage document */
  update: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPage document */
  upsert: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LandingPageUpdateInput;
  /** Unique document search */
  where: LandingPageWhereUniqueInput;
};

export type LandingPageUpsertInput = {
  /** Create document if it didn't exist */
  create: LandingPageCreateInput;
  /** Update document if it exists */
  update: LandingPageUpdateInput;
};

export type LandingPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LandingPageUpsertInput;
  /** Unique document search */
  where: LandingPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LandingPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LandingPageWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<LandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  destination: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  destination_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  destination_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  destination_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  destination_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  destination_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  destination_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  destination_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  destination_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  destination_starts_with: InputMaybe<Scalars['String']['input']>;
  documentInStages_every: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_none: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_some: InputMaybe<LandingPageWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  navigation: InputMaybe<NavigationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LandingPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<LandingPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References LandingPage record uniquely */
export type LandingPageWhereUniqueInput = {
  destination: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Fi = 'fi'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset: Maybe<Asset>;
  /** Create one landingPage */
  createLandingPage: Maybe<LandingPage>;
  /** Create one navigation */
  createNavigation: Maybe<Navigation>;
  /** Create one scheduledRelease */
  createScheduledRelease: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset: Maybe<Asset>;
  /** Delete one landingPage from _all_ existing stages. Returns deleted document. */
  deleteLandingPage: Maybe<LandingPage>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many LandingPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyLandingPagesConnection)
   */
  deleteManyLandingPages: BatchPayload;
  /** Delete many LandingPage documents, return deleted documents */
  deleteManyLandingPagesConnection: LandingPageConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation: Maybe<Navigation>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset: Maybe<Asset>;
  /** Publish one landingPage */
  publishLandingPage: Maybe<LandingPage>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many LandingPage documents
   * @deprecated Please use the new paginated many mutation (publishManyLandingPagesConnection)
   */
  publishManyLandingPages: BatchPayload;
  /** Publish many LandingPage documents */
  publishManyLandingPagesConnection: LandingPageConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /** Publish one navigation */
  publishNavigation: Maybe<Navigation>;
  /** Schedule to publish one asset */
  schedulePublishAsset: Maybe<Asset>;
  /** Schedule to publish one landingPage */
  schedulePublishLandingPage: Maybe<LandingPage>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation: Maybe<Navigation>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset: Maybe<Asset>;
  /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLandingPage: Maybe<LandingPage>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation: Maybe<Navigation>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset: Maybe<Asset>;
  /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLandingPage: Maybe<LandingPage>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many LandingPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLandingPagesConnection)
   */
  unpublishManyLandingPages: BatchPayload;
  /** Find many LandingPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLandingPagesConnection: LandingPageConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation: Maybe<Navigation>;
  /** Update one asset */
  updateAsset: Maybe<Asset>;
  /** Update one landingPage */
  updateLandingPage: Maybe<LandingPage>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many landingPages
   * @deprecated Please use the new paginated many mutation (updateManyLandingPagesConnection)
   */
  updateManyLandingPages: BatchPayload;
  /** Update many LandingPage documents */
  updateManyLandingPagesConnection: LandingPageConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /** Update one navigation */
  updateNavigation: Maybe<Navigation>;
  /** Update one scheduledRelease */
  updateScheduledRelease: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset: Maybe<Asset>;
  /** Upsert one landingPage */
  upsertLandingPage: Maybe<LandingPage>;
  /** Upsert one navigation */
  upsertNavigation: Maybe<Navigation>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateLandingPageArgs = {
  data: LandingPageCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteLandingPageArgs = {
  where: LandingPageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyLandingPagesArgs = {
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationDeleteManyLandingPagesConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishLandingPageArgs = {
  to?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyLandingPagesArgs = {
  to?: Array<Stage>;
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationPublishManyLandingPagesConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishLandingPageArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
};


export type MutationSchedulePublishNavigationArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishLandingPageArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  where: LandingPageWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishLandingPageArgs = {
  from?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyLandingPagesArgs = {
  from?: Array<Stage>;
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUnpublishManyLandingPagesConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateLandingPageArgs = {
  data: LandingPageUpdateInput;
  where: LandingPageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyLandingPagesArgs = {
  data: LandingPageUpdateManyInput;
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUpdateManyLandingPagesConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: LandingPageUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: NavigationUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertLandingPageArgs = {
  upsert: LandingPageUpsertInput;
  where: LandingPageWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};

/** This component is being used, when we want to show different icons with related name or without. It's also possibe to show only related value (name), which is determined based on which boolean option (Show Icon) has been chosen. */
export type NameIcon = Entity & {
  __typename?: 'NameIcon';
  /** There is possibility to redirect user for another page, when either icon or custom value has been pressed. Optional field. */
  href: Maybe<Scalars['String']['output']>;
  /** Field will determine, if user will be redirected straight into new page or new tab on browser will opened instead. Optional field. */
  hrefType: Maybe<AnchorTarget>;
  /** Choose, which icon you want to show by default. */
  icon: Icon;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Add name for related icon or custom value, if you plan to hide icon completely. */
  name: Scalars['String']['output'];
  /** By default only icon will be shown to the user, even if related icon name has been given. If you want to hide icon, please change field into false. */
  showIcon: Scalars['Boolean']['output'];
  /** System stage field */
  stage: Stage;
};

export type NameIconConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NameIconWhereUniqueInput;
};

/** A connection to a list of items. */
export type NameIconConnection = {
  __typename?: 'NameIconConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NameIconEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NameIconCreateInput = {
  href: InputMaybe<Scalars['String']['input']>;
  hrefType: InputMaybe<AnchorTarget>;
  icon: Icon;
  name: Scalars['String']['input'];
  showIcon: Scalars['Boolean']['input'];
};

export type NameIconCreateManyInlineInput = {
  /** Create and connect multiple existing NameIcon documents */
  create: InputMaybe<Array<NameIconCreateInput>>;
};

export type NameIconCreateOneInlineInput = {
  /** Create and connect one NameIcon document */
  create: InputMaybe<NameIconCreateInput>;
};

export type NameIconCreateWithPositionInput = {
  /** Document to create */
  data: NameIconCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NameIconEdge = {
  __typename?: 'NameIconEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NameIcon;
};

/** Identifies documents */
export type NameIconManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<NameIconWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<NameIconWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<NameIconWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  href: InputMaybe<Scalars['String']['input']>;
  hrefType: InputMaybe<AnchorTarget>;
  /** All values that are contained in given list. */
  hrefType_in: InputMaybe<Array<InputMaybe<AnchorTarget>>>;
  /** Any other value that exists and is not equal to the given value. */
  hrefType_not: InputMaybe<AnchorTarget>;
  /** All values that are not contained in given list. */
  hrefType_not_in: InputMaybe<Array<InputMaybe<AnchorTarget>>>;
  /** All values containing the given string. */
  href_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  href_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  href_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  href_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  href_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  href_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  href_starts_with: InputMaybe<Scalars['String']['input']>;
  icon: InputMaybe<Icon>;
  /** All values that are contained in given list. */
  icon_in: InputMaybe<Array<InputMaybe<Icon>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not: InputMaybe<Icon>;
  /** All values that are not contained in given list. */
  icon_not_in: InputMaybe<Array<InputMaybe<Icon>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  showIcon: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showIcon_not: InputMaybe<Scalars['Boolean']['input']>;
};

export enum NameIconOrderByInput {
  HrefTypeAsc = 'hrefType_ASC',
  HrefTypeDesc = 'hrefType_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShowIconAsc = 'showIcon_ASC',
  ShowIconDesc = 'showIcon_DESC'
}

export type NameIconParent = Navigation;

export type NameIconParentConnectInput = {
  Navigation: InputMaybe<NavigationConnectInput>;
};

export type NameIconParentCreateInput = {
  Navigation: InputMaybe<NavigationCreateInput>;
};

export type NameIconParentCreateManyInlineInput = {
  /** Connect multiple existing NameIconParent documents */
  connect: InputMaybe<Array<NameIconParentWhereUniqueInput>>;
  /** Create and connect multiple existing NameIconParent documents */
  create: InputMaybe<Array<NameIconParentCreateInput>>;
};

export type NameIconParentCreateOneInlineInput = {
  /** Connect one existing NameIconParent document */
  connect: InputMaybe<NameIconParentWhereUniqueInput>;
  /** Create and connect one NameIconParent document */
  create: InputMaybe<NameIconParentCreateInput>;
};

export type NameIconParentUpdateInput = {
  Navigation: InputMaybe<NavigationUpdateInput>;
};

export type NameIconParentUpdateManyInlineInput = {
  /** Connect multiple existing NameIconParent documents */
  connect: InputMaybe<Array<NameIconParentConnectInput>>;
  /** Create and connect multiple NameIconParent documents */
  create: InputMaybe<Array<NameIconParentCreateInput>>;
  /** Delete multiple NameIconParent documents */
  delete: InputMaybe<Array<NameIconParentWhereUniqueInput>>;
  /** Disconnect multiple NameIconParent documents */
  disconnect: InputMaybe<Array<NameIconParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NameIconParent documents */
  set: InputMaybe<Array<NameIconParentWhereUniqueInput>>;
  /** Update multiple NameIconParent documents */
  update: InputMaybe<Array<NameIconParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NameIconParent documents */
  upsert: InputMaybe<Array<NameIconParentUpsertWithNestedWhereUniqueInput>>;
};

export type NameIconParentUpdateManyWithNestedWhereInput = {
  Navigation: InputMaybe<NavigationUpdateManyWithNestedWhereInput>;
};

export type NameIconParentUpdateOneInlineInput = {
  /** Connect existing NameIconParent document */
  connect: InputMaybe<NameIconParentWhereUniqueInput>;
  /** Create and connect one NameIconParent document */
  create: InputMaybe<NameIconParentCreateInput>;
  /** Delete currently connected NameIconParent document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NameIconParent document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NameIconParent document */
  update: InputMaybe<NameIconParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NameIconParent document */
  upsert: InputMaybe<NameIconParentUpsertWithNestedWhereUniqueInput>;
};

export type NameIconParentUpdateWithNestedWhereUniqueInput = {
  Navigation: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
};

export type NameIconParentUpsertWithNestedWhereUniqueInput = {
  Navigation: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NameIconParentWhereInput = {
  Navigation: InputMaybe<NavigationWhereInput>;
};

export type NameIconParentWhereUniqueInput = {
  Navigation: InputMaybe<NavigationWhereUniqueInput>;
};

export type NameIconUpdateInput = {
  href: InputMaybe<Scalars['String']['input']>;
  hrefType: InputMaybe<AnchorTarget>;
  icon: InputMaybe<Icon>;
  name: InputMaybe<Scalars['String']['input']>;
  showIcon: InputMaybe<Scalars['Boolean']['input']>;
};

export type NameIconUpdateManyInlineInput = {
  /** Create and connect multiple NameIcon component instances */
  create: InputMaybe<Array<NameIconCreateWithPositionInput>>;
  /** Delete multiple NameIcon documents */
  delete: InputMaybe<Array<NameIconWhereUniqueInput>>;
  /** Update multiple NameIcon component instances */
  update: InputMaybe<Array<NameIconUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NameIcon component instances */
  upsert: InputMaybe<Array<NameIconUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NameIconUpdateManyInput = {
  href: InputMaybe<Scalars['String']['input']>;
  hrefType: InputMaybe<AnchorTarget>;
  icon: InputMaybe<Icon>;
  name: InputMaybe<Scalars['String']['input']>;
  showIcon: InputMaybe<Scalars['Boolean']['input']>;
};

export type NameIconUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NameIconUpdateManyInput;
  /** Document search */
  where: NameIconWhereInput;
};

export type NameIconUpdateOneInlineInput = {
  /** Create and connect one NameIcon document */
  create: InputMaybe<NameIconCreateInput>;
  /** Delete currently connected NameIcon document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NameIcon document */
  update: InputMaybe<NameIconUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NameIcon document */
  upsert: InputMaybe<NameIconUpsertWithNestedWhereUniqueInput>;
};

export type NameIconUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data: InputMaybe<NameIconUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NameIconWhereUniqueInput;
};

export type NameIconUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NameIconUpdateInput;
  /** Unique document search */
  where: NameIconWhereUniqueInput;
};

export type NameIconUpsertInput = {
  /** Create document if it didn't exist */
  create: NameIconCreateInput;
  /** Update document if it exists */
  update: NameIconUpdateInput;
};

export type NameIconUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data: InputMaybe<NameIconUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NameIconWhereUniqueInput;
};

export type NameIconUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NameIconUpsertInput;
  /** Unique document search */
  where: NameIconWhereUniqueInput;
};

/** Identifies documents */
export type NameIconWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<NameIconWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<NameIconWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<NameIconWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  href: InputMaybe<Scalars['String']['input']>;
  hrefType: InputMaybe<AnchorTarget>;
  /** All values that are contained in given list. */
  hrefType_in: InputMaybe<Array<InputMaybe<AnchorTarget>>>;
  /** Any other value that exists and is not equal to the given value. */
  hrefType_not: InputMaybe<AnchorTarget>;
  /** All values that are not contained in given list. */
  hrefType_not_in: InputMaybe<Array<InputMaybe<AnchorTarget>>>;
  /** All values containing the given string. */
  href_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  href_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  href_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  href_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  href_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  href_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  href_starts_with: InputMaybe<Scalars['String']['input']>;
  icon: InputMaybe<Icon>;
  /** All values that are contained in given list. */
  icon_in: InputMaybe<Array<InputMaybe<Icon>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not: InputMaybe<Icon>;
  /** All values that are not contained in given list. */
  icon_not_in: InputMaybe<Array<InputMaybe<Icon>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  showIcon: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showIcon_not: InputMaybe<Scalars['Boolean']['input']>;
};

/** References NameIcon record uniquely */
export type NameIconWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type Navigation = Entity & Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Choose, which social icons you want to show to the user. These icons will be shown at footer element under navigation links. */
  namesIconsList: Array<NameIcon>;
  /** This field will determine, which pages we would be showing to the user on both header & footer elements. Also if needed, you can determine each links order below. */
  navigationLinks: Array<NavigationNavigationLinks>;
  /** Title for header navigation. Will be shown either on left or right side, based on chosen "position" value. */
  navigationTitle: Scalars['String']['output'];
  /** Something here */
  position: Maybe<Scalars['Boolean']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Display some slogan sentence, which will be shown on the footer before navigation links at right side of the container. Optional field. */
  slogan: Maybe<RichText>;
  /** If you want to show slogan on footer, please fill this field. Need to choose, which words (keywords) will be shown back to the user. Optional field. */
  sloganKeys: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type NavigationCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NavigationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


export type NavigationNamesIconsListArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<NameIconOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NameIconWhereInput>;
};


export type NavigationNavigationLinksArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type NavigationScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type NavigationUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  namesIconsList: InputMaybe<NameIconCreateManyInlineInput>;
  navigationLinks: InputMaybe<NavigationNavigationLinksCreateManyInlineInput>;
  navigationTitle: Scalars['String']['input'];
  position: InputMaybe<Scalars['Boolean']['input']>;
  slogan: InputMaybe<Scalars['RichTextAST']['input']>;
  sloganKeys: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some: InputMaybe<NavigationWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  namesIconsList_every: InputMaybe<NameIconWhereInput>;
  namesIconsList_none: InputMaybe<NameIconWhereInput>;
  namesIconsList_some: InputMaybe<NameIconWhereInput>;
  /** All values in which the union is empty */
  navigationLinks_empty: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  navigationLinks_some: InputMaybe<NavigationNavigationLinksWhereInput>;
  navigationTitle: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  navigationTitle_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  navigationTitle_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  navigationTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationTitle_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  navigationTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  navigationTitle_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  navigationTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  navigationTitle_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  navigationTitle_starts_with: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  position_not: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  sloganKeys: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sloganKeys_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sloganKeys_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sloganKeys_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sloganKeys_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sloganKeys_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sloganKeys_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sloganKeys_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sloganKeys_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sloganKeys_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SloganKeysAsc = 'sloganKeys_ASC',
  SloganKeysDesc = 'sloganKeys_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationUpdateInput = {
  namesIconsList: InputMaybe<NameIconUpdateManyInlineInput>;
  navigationLinks: InputMaybe<NavigationNavigationLinksUpdateManyInlineInput>;
  navigationTitle: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['Boolean']['input']>;
  slogan: InputMaybe<Scalars['RichTextAST']['input']>;
  sloganKeys: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  navigationTitle: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['Boolean']['input']>;
  slogan: InputMaybe<Scalars['RichTextAST']['input']>;
  sloganKeys: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Navigation document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Navigation document */
  update: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some: InputMaybe<NavigationWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  namesIconsList_every: InputMaybe<NameIconWhereInput>;
  namesIconsList_none: InputMaybe<NameIconWhereInput>;
  namesIconsList_some: InputMaybe<NameIconWhereInput>;
  /** All values in which the union is empty */
  navigationLinks_empty: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  navigationLinks_some: InputMaybe<NavigationNavigationLinksWhereInput>;
  navigationTitle: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  navigationTitle_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  navigationTitle_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  navigationTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationTitle_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  navigationTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  navigationTitle_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  navigationTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  navigationTitle_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  navigationTitle_starts_with: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  position_not: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  sloganKeys: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sloganKeys_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sloganKeys_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sloganKeys_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sloganKeys_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sloganKeys_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sloganKeys_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sloganKeys_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sloganKeys_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sloganKeys_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities: Maybe<Array<Entity>>;
  /** Retrieve a single landingPage */
  landingPage: Maybe<LandingPage>;
  /** Retrieve document version */
  landingPageVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple landingPages */
  landingPages: Array<LandingPage>;
  /** Retrieve multiple landingPages using the Relay connection interface */
  landingPagesConnection: LandingPageConnection;
  /** Retrieve a single navigation */
  navigation: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryEntitiesArgs = {
  locales: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryLandingPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LandingPageWhereUniqueInput;
};


export type QueryLandingPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLandingPagesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryLandingPagesConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<NavigationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<NavigationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<NavigationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Operation description */
  description: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | LandingPage | Navigation;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive: InputMaybe<Scalars['Json']['input']>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive: InputMaybe<Scalars['Json']['input']>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Release description */
  description: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  /** Release date and time */
  releaseAt: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']['input']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']['input']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every: InputMaybe<UserWhereStageInput>;
  documentInStages_none: InputMaybe<UserWhereStageInput>;
  documentInStages_some: InputMaybe<UserWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  picture: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every: InputMaybe<UserWhereStageInput>;
  documentInStages_none: InputMaybe<UserWhereStageInput>;
  documentInStages_some: InputMaybe<UserWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  picture: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type NavigationNavigationLinks = LandingPage;

export type NavigationNavigationLinksConnectInput = {
  LandingPage: InputMaybe<LandingPageConnectInput>;
};

export type NavigationNavigationLinksCreateInput = {
  LandingPage: InputMaybe<LandingPageCreateInput>;
};

export type NavigationNavigationLinksCreateManyInlineInput = {
  /** Connect multiple existing navigationNavigationLinks documents */
  connect: InputMaybe<Array<NavigationNavigationLinksWhereUniqueInput>>;
  /** Create and connect multiple existing navigationNavigationLinks documents */
  create: InputMaybe<Array<NavigationNavigationLinksCreateInput>>;
};

export type NavigationNavigationLinksCreateOneInlineInput = {
  /** Connect one existing navigationNavigationLinks document */
  connect: InputMaybe<NavigationNavigationLinksWhereUniqueInput>;
  /** Create and connect one navigationNavigationLinks document */
  create: InputMaybe<NavigationNavigationLinksCreateInput>;
};

export type NavigationNavigationLinksUpdateInput = {
  LandingPage: InputMaybe<LandingPageUpdateInput>;
};

export type NavigationNavigationLinksUpdateManyInlineInput = {
  /** Connect multiple existing navigationNavigationLinks documents */
  connect: InputMaybe<Array<NavigationNavigationLinksConnectInput>>;
  /** Create and connect multiple navigationNavigationLinks documents */
  create: InputMaybe<Array<NavigationNavigationLinksCreateInput>>;
  /** Delete multiple navigationNavigationLinks documents */
  delete: InputMaybe<Array<NavigationNavigationLinksWhereUniqueInput>>;
  /** Disconnect multiple navigationNavigationLinks documents */
  disconnect: InputMaybe<Array<NavigationNavigationLinksWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing navigationNavigationLinks documents */
  set: InputMaybe<Array<NavigationNavigationLinksWhereUniqueInput>>;
  /** Update multiple navigationNavigationLinks documents */
  update: InputMaybe<Array<NavigationNavigationLinksUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple navigationNavigationLinks documents */
  upsert: InputMaybe<Array<NavigationNavigationLinksUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationNavigationLinksUpdateManyWithNestedWhereInput = {
  LandingPage: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type NavigationNavigationLinksUpdateOneInlineInput = {
  /** Connect existing navigationNavigationLinks document */
  connect: InputMaybe<NavigationNavigationLinksWhereUniqueInput>;
  /** Create and connect one navigationNavigationLinks document */
  create: InputMaybe<NavigationNavigationLinksCreateInput>;
  /** Delete currently connected navigationNavigationLinks document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected navigationNavigationLinks document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single navigationNavigationLinks document */
  update: InputMaybe<NavigationNavigationLinksUpdateWithNestedWhereUniqueInput>;
  /** Upsert single navigationNavigationLinks document */
  upsert: InputMaybe<NavigationNavigationLinksUpsertWithNestedWhereUniqueInput>;
};

export type NavigationNavigationLinksUpdateWithNestedWhereUniqueInput = {
  LandingPage: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type NavigationNavigationLinksUpsertWithNestedWhereUniqueInput = {
  LandingPage: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type NavigationNavigationLinksWhereInput = {
  LandingPage: InputMaybe<LandingPageWhereInput>;
};

export type NavigationNavigationLinksWhereUniqueInput = {
  LandingPage: InputMaybe<LandingPageWhereUniqueInput>;
};

export type RichTextHygraphFragment = { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } & { ' $fragmentName'?: 'RichTextHygraphFragment' };

export type NamesIconsListFragment = { __typename?: 'NameIcon', name: string, icon: Icon, showIcon: boolean, href: string | null, hrefType: AnchorTarget | null } & { ' $fragmentName'?: 'NamesIconsListFragment' };

export type GetNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavigationQuery = { __typename?: 'Query', navigations: Array<{ __typename?: 'Navigation', position: boolean | null, navigationTitle: string, sloganKeys: string | null, navigationLinks: Array<{ __typename?: 'LandingPage', slug: string, title: string, destination: string }>, socialIcons: Array<(
      { __typename?: 'NameIcon' }
      & { ' $fragmentRefs'?: { 'NamesIconsListFragment': NamesIconsListFragment } }
    )>, slogan: (
      { __typename?: 'RichText' }
      & { ' $fragmentRefs'?: { 'RichTextHygraphFragment': RichTextHygraphFragment } }
    ) | null }> };

export const RichTextHygraphFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextHygraph"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<RichTextHygraphFragment, unknown>;
export const NamesIconsListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NamesIconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NameIcon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"showIcon"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"hrefType"}}]}}]} as unknown as DocumentNode<NamesIconsListFragment, unknown>;
export const GetNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNavigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"socialIcons"},"name":{"kind":"Name","value":"namesIconsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NamesIconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slogan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextHygraph"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sloganKeys"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NamesIconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NameIcon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"showIcon"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"hrefType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextHygraph"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<GetNavigationQuery, GetNavigationQueryVariables>;