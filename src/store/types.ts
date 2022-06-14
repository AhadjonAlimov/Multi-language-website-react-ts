export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface LangState {
    language: string;
}

interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}

export type LangAction = SetLanguageAction;