/// <reference types="node" />
import type { AsyncLocalStorage } from 'async_hooks';
import type { NextCookies } from '../../server/web/spec-extension/cookies';
export interface RequestStore {
    headers: Headers;
    cookies: NextCookies;
    previewData: any;
}
export declare let requestAsyncStorage: AsyncLocalStorage<RequestStore> | RequestStore;
