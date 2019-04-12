import UserInfo from "./UserInfo";
export declare enum RTCPMode {
    WORST = "worst",
    BEST = "best"
}
export declare enum Mode {
    STANDARD = "standard",
    PUSH = "push"
}
export declare enum Codec {
    VP8 = "VP8",
    H264 = "H264"
}
export interface CreateParameters {
    ttl?: number;
    rtcpMode?: RTCPMode;
    mode?: Mode;
    videoCodec?: Codec;
    liveRecording?: boolean;
}
export interface CreateOptions {
    alias?: string;
    params?: CreateParameters;
}
export interface CreateParameters {
    ttl?: number;
    rtcpMode?: RTCPMode;
    mode?: Mode;
    videoCodec?: Codec;
    liveRecording?: boolean;
}
export interface CreateOptions {
    alias?: string;
    params?: CreateParameters;
}
export declare enum UserType {
    USER = "user",
    LISTENER = "listener"
}
export interface JoinUserInfo {
    type?: UserType;
}
export interface JoinOptions {
    user?: JoinUserInfo;
}
export interface RefreshCallback {
    (): void;
}
export interface TokenRefreshCallback {
    (): Promise<string>;
}
declare class Voxeet_ {
    refreshAccessTokenCallback: RefreshCallback | null;
    refreshToken: TokenRefreshCallback | undefined;
    constructor();
    initialize(consumerKey: string, consumerSecret: string): Promise<any>;
    initializeToken(accessToken: string | undefined, refreshToken: TokenRefreshCallback): Promise<{}>;
    connect(userInfo: UserInfo): Promise<any>;
    disconnect(): Promise<any>;
    create(options: CreateOptions): Promise<any>;
    join(conferenceId: string, options?: JoinOptions): Promise<any>;
    broadcast(conferenceId: string): Promise<any>;
    leave(): Promise<any>;
    invite(conferenceId: string, participants: UserInfo[]): Promise<any>;
    sendBroadcastMessage(message: string): Promise<any>;
    appearMaximized(enabled: boolean): Promise<any>;
    defaultBuiltInSpeaker(enabled: boolean): Promise<any>;
    defaultVideo(enabled: boolean): Promise<any>;
    screenAutoLock(enabled: boolean): Promise<any>;
    isUserLoggedIn(): Promise<boolean>;
    checkForAwaitingConference(): Promise<any>;
    startConference(conferenceId: string, participants: Array<UserInfo>): Promise<any>;
    stopConference(): Promise<any>;
    openSession(userInfo: UserInfo): Promise<any>;
    closeSession(): Promise<any>;
    onAccessTokenOk(accessToken: string): Promise<{}>;
    onAccessTokenKo(errorMessage: string): Promise<{}>;
}
export declare const Voxeet: Voxeet_;
export {};
