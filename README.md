# React Spa boilerplate

## Tools

- esbuild
- typescript
- react

## Initialization

1. install dependencies

```bash
yarn
```

2. install husky

```bash
yarn prepare
```

## Environment variables

| name         | example                              | explan                    |
| ------------ | ------------------------------------ | ------------------------- |
| APP_ENV      | development                          | \*                        |
| BUILD_FOLDER | build_dev / build_stage / build_prod | \*                        |
| BASE_PATH    | /coupon (https://xxxx/coupon/)       | \* use in sub path router |

## Internal library

| name    | source                                      |
| ------- | ------------------------------------------- |
| @jk/jui | https://lab.jkopay.app/-/web/detail/@jk/jui |
| @jk/api | https://lab.jkopay.app/-/web/detail/@jk/api |
| @jk/use | https://lab.jkopay.app/-/web/detail/@jk/use |

## External library

| name          |
| ------------- |
| esbuild       |
| tailwind      |
| redux-toolkit |
| reach/router  |
| yup           |
| lodash        |
| dayjs         |

## Check Bundle analyze before launching

After building your project, `bundle_analyze.html` file will be generated in the build folder.

Click `bundle_analyze.html` directly to see more details.
