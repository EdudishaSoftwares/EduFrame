import { IEnvironment } from "./environment.namespace";
import { environmentDev } from "./environment.dev";
import { environmentStage } from "./environment.stage";

const env: IEnvironment.IEnvType = process.env.VITE_APP_ENV as IEnvironment.IEnvType;


let envConfig :IEnvironment.IEnvConfig = environmentDev;

switch(env) {
    case 'dev':
        envConfig = environmentDev;
        break;
    case 'stage':
        envConfig = environmentStage;
        break;
    default:
        envConfig = environmentDev;
}

export default envConfig;