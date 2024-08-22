import { ResponseEnum, ScopeEnum } from "./ngs-google-auth.enums";

type AccessType = 'online' | 'offline';
type AuthResponseType = ResponseEnum | string;
type ScopeType = ScopeEnum | string;
type PromptType = 'none' | 'consent' | 'select_account';

export{AccessType, AuthResponseType, ScopeType, PromptType};