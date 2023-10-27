import { actions } from "@data/slice";
import { store } from "@data/store";
import type { JKObject } from "@data/types/common";
import forIn from "lodash/forIn";

const redux: JKObject = {};
forIn(actions, (f, k) => (redux[k] = (args: never) => store.dispatch(f(args))));

export default redux;
