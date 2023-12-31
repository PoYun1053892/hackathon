/* eslint-disable @typescript-eslint/no-explicit-any */
export type JKFunction = (...args: any[]) => any;

export type JKObject = { [key: string]: any };

export type JKArray = any[];

export type JKGeneralObject = JKObject | JKArray;

export type JKObjectByFunc = { [key: string]: JKFunction };

export type JKConstructor<T> = new (...args: any[]) => T;

export type ReactPage<P = Record<string, unknown>> = React.ComponentType<P>;
