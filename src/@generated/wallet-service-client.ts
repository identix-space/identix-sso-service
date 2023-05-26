/* eslint-disable */
// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum Blockchains {
  Everscale = 'everscale',
  Polygon = 'polygon'
}

export type Mutation = {
  __typename?: 'Mutation';
  deleteAccount: Scalars['Boolean'];
  deleteAccountByDid: Scalars['Boolean'];
  deleteVC: Scalars['Boolean'];
  getOrCreateAccount: TGetOrCreateAccountResult;
  issueVC: Scalars['String'];
  requestVcVerification: Scalars['Boolean'];
  saveVC: VcStorageEntity;
  signMessage: SignMessageResponse;
  verifySignedMessage: Scalars['Boolean'];
  verifyVc: Scalars['Boolean'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteAccountByDidArgs = {
  accountDid: Scalars['String'];
};


export type MutationDeleteVcArgs = {
  id: Scalars['Int'];
};


export type MutationGetOrCreateAccountArgs = {
  params: TAccountGetOrCreate;
};


export type MutationIssueVcArgs = {
  id: Scalars['Int'];
};


export type MutationRequestVcVerificationArgs = {
  vcDid: Scalars['String'];
  verifierDid: Scalars['String'];
};


export type MutationSaveVcArgs = {
  holderDid: Scalars['String'];
  issuerDid: Scalars['String'];
  vcData: Scalars['String'];
  vcDid: Scalars['String'];
  vcSecret: Scalars['String'];
};


export type MutationSignMessageArgs = {
  accountDid: Scalars['String'];
  message: Scalars['String'];
};


export type MutationVerifySignedMessageArgs = {
  accountDid: Scalars['String'];
  message: Scalars['String'];
  signedMessage: Scalars['String'];
};


export type MutationVerifyVcArgs = {
  vcDid: Scalars['String'];
  verificationStatus: Scalars['String'];
  verifierDid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getUserVCs: Array<VcStorageEntity>;
  getVC: VcStorageEntity;
};


export type QueryGetUserVCsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  userDid: Scalars['String'];
  vcType?: InputMaybe<Scalars['String']>;
};


export type QueryGetVcArgs = {
  vcDid: Scalars['String'];
};

export type SignMessageResponse = {
  __typename?: 'SignMessageResponse';
  signature: Scalars['String'];
  signed: Scalars['String'];
};

export type TAccountGetOrCreate = {
  web2?: InputMaybe<Web2AccountParams>;
  web3?: InputMaybe<Web3AccountParams>;
};

export type TGetOrCreateAccountResult = {
  __typename?: 'TGetOrCreateAccountResult';
  dids: Array<Scalars['String']>;
};

export type UsersEntity = {
  __typename?: 'UsersEntity';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  nickname?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type VcStorageEntity = {
  __typename?: 'VcStorageEntity';
  createdAt: Scalars['DateTime'];
  holderDid: Scalars['String'];
  id: Scalars['Int'];
  issuerDid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vcData: Scalars['String'];
  vcDid: Scalars['String'];
  vcSecret?: Maybe<Scalars['String']>;
  verificationCases: Array<VcVerificationCasesEntity>;
};

export type VcVerificationCasesEntity = {
  __typename?: 'VcVerificationCasesEntity';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  vc: VcStorageEntity;
  verificationStatus: Scalars['String'];
  verifierDid: Scalars['String'];
};

export type Web2AccountParams = {
  identifier: Scalars['String'];
  method: Web2AuthenticationMethods;
};

export enum Web2AuthenticationMethods {
  ClientId = 'clientId',
  EvmAddress = 'evmAddress',
  Facebook = 'facebook',
  Google = 'google',
  MagicLink = 'magicLink',
  Telegram = 'telegram',
  Twitter = 'twitter'
}

export type Web3AccountParams = {
  address: Scalars['String'];
  blockchain: Blockchains;
};

export type Web3AccountsEntity = {
  __typename?: 'Web3AccountsEntity';
  address?: Maybe<Scalars['String']>;
  blockchain?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  privateKey: Scalars['String'];
  publicKey: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UsersEntity;
};

export type GetOrCreateAccountMutationVariables = Exact<{
  params: TAccountGetOrCreate;
}>;


export type GetOrCreateAccountMutation = { __typename?: 'Mutation', getOrCreateAccount: { __typename?: 'TGetOrCreateAccountResult', dids: Array<string> } };

export type DeleteAccountByDidMutationVariables = Exact<{
  accountDid: Scalars['String'];
}>;


export type DeleteAccountByDidMutation = { __typename?: 'Mutation', deleteAccountByDid: boolean };


export const GetOrCreateAccountDocument = gql`
    mutation GetOrCreateAccount($params: TAccountGetOrCreate!) {
  getOrCreateAccount(params: $params) {
    dids
  }
}
    `;
export const DeleteAccountByDidDocument = gql`
    mutation DeleteAccountByDid($accountDid: String!) {
  deleteAccountByDid(accountDid: $accountDid)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetOrCreateAccount(variables: GetOrCreateAccountMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOrCreateAccountMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrCreateAccountMutation>(GetOrCreateAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOrCreateAccount', 'mutation');
    },
    DeleteAccountByDid(variables: DeleteAccountByDidMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteAccountByDidMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteAccountByDidMutation>(DeleteAccountByDidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteAccountByDid', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;