// @ts-ignore
import Unicon from "vue-unicons";
// @ts-ignore
import * as icons from "vue-unicons/dist/icons";

Unicon.add(Object.values(icons));

export default Unicon as unknown as { install: (app: any) => void };
