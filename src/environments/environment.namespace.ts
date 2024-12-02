export namespace IEnvironment {
    export type IEnvType = 'dev' | 'stage';

    export interface IEnvConfig {
        production:boolean;
        title: string;
    }
}