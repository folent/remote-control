import internal from "stream";
import { EOL } from "os"
import { ACTIONS } from "./utils/actions.js";

export const actionHandler = async (duplex: internal.Duplex, chunk: string) => {
    (async (duplex, data) => {
        try {
          const [command, value1, value2] = data.toString().split(' ');
          const result = await ACTIONS[command](Number(value1), Number(value2));
          const response = result && typeof result === 'string' ? `${command} ${result}` : command;
          
          process.stdout.write(response + EOL)
          duplex.write(response);
          
        } catch (e) {
          duplex.write('Error');
        }
      })(duplex, chunk);
}