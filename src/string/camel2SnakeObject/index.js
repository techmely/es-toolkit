import { camel2snake } from "../camel2Snake";
export function camel2SnakeObject(obj) {
    return Object.entries(obj).reduce((acc, cur) => ({ ...acc, [camel2snake(cur[0])]: cur[1] }), {});
}
