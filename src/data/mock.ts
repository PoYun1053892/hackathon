import angel from "@images/angel.png";
import devil from "@images/devil.png";
import human from "@images/human.png";

export const parties = [
  {
    label: "天使隊",
    value: "angel",
    images: angel,
    bonus: [
      {
        prize: 50,
        title: "參加獎",
        subtitle: "街口券滿 500 元折 50 元 (1000名)",
        btn: "立即領取",
        prizeBgColor: "#572BD9",
        prizeColor: "#FFF091",
        isDisabled: false,
      },
      {
        prize: 20,
        title: "一等獎",
        subtitle: "街口券滿 500 元折 50 元 (1000名)",
        btn: "尚未完成",
        prizeBgColor: "#FFF091",
        prizeColor: "#572BD9",
        isDisabled: true,
      },
      {
        prize: 150,
        title: "二等獎",
        subtitle: "街口券滿 500 元折 50 元 (1000名)",
        btn: "尚未完成",
        prizeBgColor: "#FFF091",
        prizeColor: "#572BD9",
        isDisabled: true,
      },
    ],
  },
  {
    label: "惡魔隊",
    value: "devil",
    images: devil,
    bonus: [
      {
        prize: 20,
        title: "一等獎",
        subtitle: "交易滿 100元 可獲得20 元折價券",
        btn: "尚未完成",
        prizeBgColor: "#FFF091",
        prizeColor: "#572BD9",
        isDisabled: true,
      },
      {
        prize: 150,
        title: "二等獎",
        subtitle: "交易滿 1000 元可獲得150元折價券",
        btn: "尚未完成",
        prizeBgColor: "#FFF091",
        prizeColor: "#572BD9",
        isDisabled: true,
      },
    ],
  },
  {
    label: "凡人隊",
    value: "normal",
    images: human,
    bonus: [
      {
        prize: 300,
        title: "一等獎",
        subtitle: "交易滿 3,000 元送 300 街口幣 (200名)",
        btn: "尚未完成",
        prizeBgColor: "#FFF091",
        prizeColor: "#572BD9",
        isDisabled: true,
      },
      {
        prize: 2000,
        title: "二等獎",
        subtitle: "交易滿 5,000 元送 2000 街口幣 (20名)",
        btn: "尚未完成",
        prizeBgColor: "#FFF091",
        prizeColor: "#572BD9",
        isDisabled: true,
      },
    ],
  },
];
